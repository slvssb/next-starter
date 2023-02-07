import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { ErrorHandler } from 'next-connect'
import { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

// import { FLY_PRIMARY_REGION } from '~/lib/prisma'
import { ClientError } from '~/server/types'
import { logError } from '~/utils/logger'

// const replayRegion = `region=${FLY_PRIMARY_REGION ?? ''}`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err: Error,
  _req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next
) => {
  const { message: errorMsg, stack: errorStack } = err

  // // Redirecting write requests from read replica to master database
  // if (errorStack?.includes('PreventCommandIfReadOnly') ?? false) {
  //   res.setHeader('fly-replay', replayRegion)
  //   res.status(409).send('')
  //   return
  // }

  if (!res.headersSent) {
    if (err instanceof ClientError) {
      // Manually thrown error
      res.status(err.status).send(err.message)
    } else if (err instanceof ZodError) {
      // Error thrown from zod validation
      const zodError = fromZodError(err)
      res.status(400).send(zodError.message)
    } else if (err instanceof PrismaClientKnownRequestError) {
      // error thrown from prisma if record is already exist, or other scenario
      if (err.code === 'P2001') {
        res.status(404).send('Record does not exist')
      } else if (['P2015', 'P2018', 'P2025'].includes(err.code)) {
        res.status(500).send('Record could not be found')
      } else if (err.code === 'P2019') {
        res.status(400).send('Input error')
      } else {
        res.status(500).send('Something went wrong. Please try again later')
      }
    } else if (errorMsg.includes('Invariant')) {
      // error thrown from invariant validation
      res.status(400).send(errorMsg.split(':')[1])
    } else {
      // other errors
      res.status(500).send('Something went wrong')
    }
  }

  logError(err)
}
