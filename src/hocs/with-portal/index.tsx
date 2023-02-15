import { createPortal } from 'react-dom'

import useBodyScrollLock from '~/hooks/use-body-scroll-lock'

export default function WithPortal({ children }: { children: React.ReactNode }) {
  useBodyScrollLock()
  return createPortal(children, document.getElementById('portal-root') as HTMLElement)
}
