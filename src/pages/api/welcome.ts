import { getApiHandler } from '~/utils/api-handler'

const handler = getApiHandler()

handler.get((_req, res) => res.status(200).send('Welcome!'))

export default handler
