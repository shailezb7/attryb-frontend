import { Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext); 

    let navigate= useNavigate();
  return (
    <Flex p={'20px'} bg={'orange'} gap={'20px'} justifyContent={'space-evenly'}>
      <Button colorScheme='blue' onClick={()=>{navigate('/cardisplay')}}>Check Cars</Button><br />
      <Button colorScheme='green' onClick={()=>{navigate('/login')}}>Login</Button><br />
      <Button colorScheme='teal' onClick={()=>{navigate('/signup')}}>Signup</Button><br />
      <Button colorScheme='pink' onClick={()=>{navigate('/addcar')}}>Add Car</Button><br />
      <Button colorScheme='red'
            onClick={()=>{setIsAuth(false)}}>Logout</Button>
      </Flex>
  )
}

export default Navbar