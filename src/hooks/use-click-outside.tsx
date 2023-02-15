import { useEffect, type MutableRefObject } from 'react'

export default function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  callback?: () => void,
  enable = true
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback?.()
      }
    }

    if (enable) {
      document.addEventListener('click', handleClick)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
