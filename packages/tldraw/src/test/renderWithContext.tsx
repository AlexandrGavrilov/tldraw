import * as React from 'react'
import { TldrawApp } from '~state'
import { useKeyboardShortcuts, TldrawContext } from '~hooks'
import { mockDocument } from './mockDocument'
import { render } from '@testing-library/react'

export const Wrapper = ({ children }: { children: any }) => {
  const [app] = React.useState(() => new TldrawApp())
  const [context] = React.useState(() => {
    return app
  })

  const rWrapper = React.useRef<HTMLDivElement>(null)

  useKeyboardShortcuts(rWrapper)

  React.useEffect(() => {
    if (!document) return
    app.loadDocument(mockDocument)
  }, [document, app])

  return (
    <TldrawContext.Provider value={context}>
      <div ref={rWrapper}>{children}</div>
    </TldrawContext.Provider>
  )
}

export const renderWithContext = (children: React.ReactNode) => {
  return render(<Wrapper>{children}</Wrapper>)
}
