import './App.scss'
import './assets/scss/global.scss'
import PublicRoutes from './routes/publicRoutes'
import toast, { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
     <PublicRoutes/>
     <Toaster />
    </>
  )
}

export default App
