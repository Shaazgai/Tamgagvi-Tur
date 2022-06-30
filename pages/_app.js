import '../styles/Main.css'
import '../styles/Navbar.css'
import '../styles/Title.css'
import '../styles/Action.css'
import '../styles/Splide.css'
import '../styles/Layout.css'
import Layout from './Components/Layout'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
   
  <Component {...pageProps} />
  </Layout> 
  )


}

export default MyApp
