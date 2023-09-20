import { Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate=useNavigate();


  return (
    <Stack width={'600px'} height={'600px'} borderRadius={'10px'} bg={'blue.100'} m={'auto'}>
      <Stack mt={'100px'}>
      <Button colorScheme='blue' onClick={()=>{navigate('/cardisplay')}}>Check Cars</Button><br />
      <Button colorScheme='red' onClick={()=>{navigate('/login')}}>Login</Button><br />
      <Button colorScheme='teal' onClick={()=>{navigate('/signup')}}>Signup</Button><br />
      <Button colorScheme='pink' onClick={()=>{navigate('/addcar')}}>Add Car</Button><br />
      </Stack>
    </Stack>
  )
}

export default Home