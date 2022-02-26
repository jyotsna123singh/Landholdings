import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
 import React from 'react'
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => (
    <>
<Head>
    <title>Real Estate</title>
</Head>
   <Box maxWidth="1280px" m="auto" >
<header>
    <NavBar />
</header>
<main>
    {children}
</main>
<footer>
    <Footer />
</footer>
   </Box> 
    </>
);

export default Layout;
