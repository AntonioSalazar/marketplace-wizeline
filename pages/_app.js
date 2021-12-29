import '@styles/globals.css'

const NoLayoutProvided = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? NoLayoutProvided
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
