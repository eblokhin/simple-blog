import Alert from './alert'
import Footer from './footer'
import HeaderV2 from './header-v2'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen ">
        <Alert preview={preview} />
        <HeaderV2 />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
