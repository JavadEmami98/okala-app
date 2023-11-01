import React from 'react'
import HeaderOkala from '../component/layout/header/HeaderOkala'
import BottomNav from '../component/layout/footer/BottomNav'
import { Box } from '@mui/material'
import Footer from '../component/layout/footer/Footer'
import HeaderMobile from '../component/layout/header/HeaderMobile'



function Index() {
  return (
    <div>
        <Box sx={{display:{xs:"none",sm:"none",md:"none",lg:"block",xl:"block"}}}>
             <HeaderOkala/>
        </Box>
        <Box sx={{display:{xs:"block",sm:"block",md:"block",lg:"none",xl:"none"}}}>
             <HeaderMobile/>
        </Box>
        <main>
          hi
        </main>
        <footer>
           <Box sx={{display:{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"}}}>
        <BottomNav/>
        </Box>
        <Box sx={{display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"}}}>
          <Footer/>
        </Box>
        </footer>
     
    </div>
  )
}

export default Index