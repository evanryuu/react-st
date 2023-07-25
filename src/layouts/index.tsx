import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

function Layout() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <button type="button" onClick={() => navigate('/home')}>Go to Home</button>
      <button className="ml-4" type="button" onClick={() => navigate('/about')}>Go to About</button>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
