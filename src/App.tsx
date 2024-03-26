
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ClientHome from './routes/ClientHome'
import Result from './routes/ClientHome/SearchHome/Result'
import SearchHome from './routes/ClientHome/SearchHome'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
        <Route index element={<SearchHome />} />
          <Route path='search' element={<SearchHome />} >
            <Route path='result/:cep' element={<Result />} />
          </Route> 
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
