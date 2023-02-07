import type { NextApiRequest, NextApiResponse } from 'next'
import nc, { type RequestHandler } from 'next-connect'

import { errorHandler } from '~/server/middlewares/error-handler'
import { logRequest } from '~/server/middlewares/log-request'
import { noRouteMatch } from '~/server/middlewares/no-route-match'

export function getApiHandler<T>() {
  const handler = nc<NextApiRequest, NextApiResponse<T>>({
    onError: errorHandler,
    onNoMatch: noRouteMatch,
  })

  handler.use(logRequest)
  return handler
}

export type Handler<T> = RequestHandler<NextApiRequest, NextApiResponse<T>>
