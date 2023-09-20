import { Box, Button, Flex, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CarDiv from './CarDiv';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const CarDisplay = () => {

    let navigate=useNavigate();

    let [data,setData]=useState([]);

    let getData = async () => {
        let resp = await axios.get('https://jade-giant-python.cyclic.cloud/cars');
        // console.log(resp.data.data);
        setData(resp.data.data);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
              <Navbar/>

        <Box bg={'teal.500'} p={'20px 0'}>
            <Flex justifyContent={'space-evenly'}>
            <Heading color={'orange'} textAlign={'center'} >Car Details</Heading>
          
            </Flex>
            <SimpleGrid columns={2} gap={'20px'} p={'20px'}>
            {
                data?.map((e,i)=>{
                    return <CarDiv e={e} key={i}/>
                })
            }

        </SimpleGrid>
        </Box>
        </>
    )
}

export default CarDisplay