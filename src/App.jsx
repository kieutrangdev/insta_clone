import { useState } from 'react'
import './App.css'
import { Button } from '@chakra-ui/react'
import {Route, Routes} from "react-router-dom"
import { HomePage } from './page/HomePage/HomePage'
import AuthPage from './page/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout/PageLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
   <PageLayout>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
   </PageLayout>
  )
}

export default App
