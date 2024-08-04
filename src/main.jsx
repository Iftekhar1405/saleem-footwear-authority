import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AcceptedOrders from './components/Admin/AcceptedOrders.jsx'
import PendingOrders from './components/Admin/PendingOrders.jsx'
import RejectedOrders from './components/Admin/RejectedOrders.jsx'
import AllEmployees from './components/Admin/AllEmployees.jsx'
import AllCustomers from './components/Admin/AllCustomers.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element ={<App/>}/>
    <Route path='accepted' element={<AcceptedOrders/>}/>
    <Route path='pending' element={<PendingOrders/>}/>
    <Route path='rejected' element = {<RejectedOrders/>}/>
    <Route path='employees' element={<AllEmployees/>}/>
    <Route path='customers' element={<AllCustomers/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
