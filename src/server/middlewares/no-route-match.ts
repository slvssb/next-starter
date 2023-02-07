import type { NextApiRequest, NextApiResponse } from 'next'
import type { NoMatchHandler } from 'next-connect'

import logger from '~/utils/logger'

export const noRouteMatch: NoMatchHandler<NextApiRequest, NextApiResponse> = (req, res) => {
  res.status(405).send(`Method ${req.method ?? ''} Not Allowed`)
  logger.warn(`Request made to '${req.method ?? ''} ${req.url ?? ''}' => Not allowed`)
}
