import { FC, ReactNode } from 'react'
import Footer from './footer/footer.component'
import Header from './header/header.component'

type Props = {
  children: ReactNode
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-content max-w-[1040px] min-w-[1040px] m-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
