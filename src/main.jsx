import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
const style = {
  global:(props) => ({
    body:{
      bg:mode("gray.100","#000")(props),
      color:mode("gray.800","whileAlpha.900")(props),

    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
      <App/>
  </ChakraProvider>,
  </BrowserRouter>
)