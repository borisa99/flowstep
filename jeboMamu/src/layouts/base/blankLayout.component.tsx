import { FC, ReactNode } from 'react'
import Footer from './footer/footer.component'
import Header from './header/header.component'

type Props = {
  children: ReactNode
}

const BlankLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="m-auto">{children}</main>
      <Footer />
    </>
  )
}

export default BlankLayout
