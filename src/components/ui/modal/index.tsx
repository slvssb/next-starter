import cx from 'clsx'
import { useEffect, useRef } from 'react'

import WithPortal from '~/hocs/with-portal'
import useClickOutside from '~/hooks/use-click-outside'
import useKeyPress from '~/hooks/use-key-press'

import type { Props } from './types'

export default function Modal(props: Props) {
  const { className, show, onClickOutside } = props

  const modalContentRef = useRef<HTMLDivElement | null>(null)
  const isEscPressed = useKeyPress('Escape', show)
  useClickOutside(modalContentRef, onClickOutside, show)

  useEffect(() => {
    if (isEscPressed) {
      onClickOutside?.()
    }
  }, [isEscPressed])

  if (!show) {
    return null
  }

  return (
    <WithPortal>
      <div className="fixed top-0 z-50 h-screen w-screen overflow-y-auto bg-black/10 backdrop-blur-sm">
        <div
          ref={modalContentRef}
          className={cx(
            'relative left-1/2 my-20 min-h-modal w-11/12 max-w-screen-xl -translate-x-1/2 rounded-lg bg-white p-5 shadow-lg dark:bg-card-dim',
            className
          )}
        >
          <h1>Helloooo world</h1>
        </div>
      </div>
    </WithPortal>
  )
}
