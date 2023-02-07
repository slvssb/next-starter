import type { NextApiRequest, NextApiResponse } from 'next'
import type { Middleware } from 'next-connect'

import logger from '~/utils/logger'

export const logRequest: Middleware<NextApiRequest, NextApiResponse> = (req, res, next) => {
  logger.log({ prefix: req.method, message: req.url })
  next()
}
