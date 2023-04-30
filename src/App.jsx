// import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'

// const router = createBrowserRouter([

// ]);

function App() {
  


  return (
    <div className='app'>
    {/* <RouterProvider router={router} /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
