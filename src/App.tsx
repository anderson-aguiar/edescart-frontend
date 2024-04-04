
import { Navigate, Route, Routes } from 'react-router-dom'
import ClientHome from './routes/ClientHome'
import SearchHome from './routes/ClientHome/SearchHome'
import Login from './routes/ClientHome/Login'
import Admin from './routes/Admin'
import AdminHome from './routes/Admin/AdminHome'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import { PrivateRoute } from './components/PrivateRoute'



function App() {


  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<SearchHome />} />
          <Route path='search' element={<SearchHome />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/admin/' element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>} >
          <Route index element={<AdminHome />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App
