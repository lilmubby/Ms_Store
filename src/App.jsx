import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
// import Root from "./Pages/Root"
import HomePage from "./Pages/HomePage"
import Product from "./components/Shop/Product"
import NikePage from "./Pages/NikePage"
import AdidasPage from "./Pages/AdidasPage"
import PumaPage from "./Pages/PumaPage"
import NewBalancePage from "./Pages/NewBalancePage"
import ErrorBoundary from "./Pages/ErrorBoundary"

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <Product />
      },
      {
        path: 'nike',
        element: <NikePage />
      },
      {
        path: 'adidas',
        element: <AdidasPage />
      },
      {
        path: 'puma',
        element: <PumaPage />
      },
      {
        path: 'new_balance',
        element: <NewBalancePage />
      }
    ]
  }
]);

function App() {
  


  return (
    <div className='app'>
    <RouterProvider router={router} />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  )
}

export default App
