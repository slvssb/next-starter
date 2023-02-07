import { Signale } from 'signale'

const logger = new Signale({
  config: {
    displayBadge: true,
    displayDate: true,
    displayFilename: true,
    displayLabel: true,
    displayScope: true,
    displayTimestamp: true,
    underlineLabel: false,
    underlineMessage: false,
    underlinePrefix: false,
    underlineSuffix: false,
    uppercaseLabel: true,
  },
  scope: 'Next-Starter',
})

export const logError = (error: unknown) => {
  logger.fatal(error)
}

export default logger
