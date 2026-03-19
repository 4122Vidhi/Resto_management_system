import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Dashboard from './user/Dashboard'
import Index from './admin/Index'
import Login from './admin/Login'
import Register from './admin/Register'
import User from './admin/User'
import Menu from './admin/Menu'
import Addmenu from './admin/Addmenu'
import Category from './admin/Category'
import Table from './admin/Table'
import Order from './admin/Order'
import Payment from './admin/Payment'

import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

// 👇 This is where useLocation works
function LayoutRoutes() {
  const location = useLocation();
  const currentPath = location.pathname;

  // paths where we DON’T want header/sidebar/footer
  const noLayoutPaths = ['/'];

  const showLayout = !noLayoutPaths.includes(currentPath);

  return (
    <>
      <Routes>
      {/* ✅ Dashboard route OUTSIDE the layout */}
      <Route path="/" element={<Dashboard />} />

      {/* ✅ All other routes WITH layout */}
      <Route
        path="/*"
        element={
          <div className="container-scroller">
            {showLayout && <Sidebar />}
            <div className="container-fluid page-body-wrapper">
              {showLayout && <Header />}
              <div className="main-panel">
                <Routes>
                  <Route path="/index" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/addmenu" element={<Addmenu />} />
                  <Route path="/table" element={<Table />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/payment" element={<Payment />} />
                </Routes>
                {showLayout && <Footer />}
              </div>
            </div>
          </div>
        }
      />
    </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutRoutes />
    </BrowserRouter>
  );
}

export default App;
