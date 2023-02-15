import { useEffect, useState } from 'react'

export default function useKeyPress(targetKey: string, enable = true) {
  const [keyPressed, setKeyPressed] = useState(false)

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) setKeyPressed(true)
    }

    if (enable) {
      window.addEventListener('keydown', downHandler)
    }

    return () => {
      setKeyPressed(false)
      window.removeEventListener('keydown', downHandler)
    }
  }, [enable, targetKey])

  return keyPressed
}
