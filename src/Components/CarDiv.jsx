import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarDiv = ({e}) => {

    let navigate=useNavigate();

    let CarDetails=()=>{
      console.log(e._id);
      navigate('/cardetails');
      localStorage.setItem("details",JSON.stringify(e));
      localStorage.setItem("id",e._id);

    }

  return (
    <Box p={'20px'} bg={'teal'} borderRadius={'10px'}
     alignItems={'center'}
     onClick={CarDetails}>
        <Heading>{e.name}</Heading><br /><br />

        <Box > <Image src={e.imageUrl} borderRadius={'10px'}></Image></Box><br /><br />

        <Text fontSize={'20px'} fontWeight={'bold'}>Description: {e.description}</Text>

        <Text fontSize={'20px'} fontWeight={'bold'}>Price: {e.price}</Text>

        <Text fontSize={'20px'} fontWeight={'bold'}>Color: {e.color}</Text>

        <Text fontSize={'20px'} fontWeight={'bold'}>Mileage: {e.mileage} lit/km</Text>
    </Box>
  )
}

export default CarDiv