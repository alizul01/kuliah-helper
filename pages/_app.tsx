import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider, ColorHues, Theme} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import Navbar from "../component/Navbar"; // ini buat bikin tema sendiri

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}


const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return(
  // ini buat ngasih tau ke react kalo kita pake ChakraUI, cukup di sini aja
  <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
