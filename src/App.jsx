import './App.css'
import { AppRouter } from './Router/AppRouter'
import { Header } from './containers/Header/Header'
import { Footer } from './containers/Footer/Footer'



function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
