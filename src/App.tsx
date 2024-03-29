
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ClientHome from './routes/ClientHome'
import SearchHome from './routes/ClientHome/SearchHome'
import Login from './routes/ClientHome/Login'
import Admin from './routes/Admin'
import AdminHome from './routes/Admin/AdminHome'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<SearchHome />} />
          <Route path='search' element={<SearchHome />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/admin/' element={<Admin />} >
          <Route index element={<AdminHome />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
