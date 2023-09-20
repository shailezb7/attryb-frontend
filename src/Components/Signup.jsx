import React, { useState } from 'react'
import { Button, Container, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const Signup = () => {

  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [User,setUser]= useState("");

  let handleSignup = async () => {
    let resp = await axios.post('https://jade-giant-python.cyclic.cloud/signup', { name, email, password,User });
    navigate('/login');
  }



  return (
    <>
      <Navbar/>
    <Container mt={'100px'} size={'500px'} boxShadow={'0 0 10px rgb(231,56,65)'} p={'25px'} borderRadius={'10px'}>
      <FormControl>
        <FormLabel color={'rgb(231,56,65)'}>Name</FormLabel>
        <Input type='text' onChange={(e) => { setName(e.target.value) }} /><br /><br />

        <FormLabel color={'rgb(231,56,65)'}>Email address</FormLabel>
        <Input type='email' onChange={(e) => { setEmail(e.target.value) }} /><br /><br />

        <FormLabel color={'rgb(231,56,65)'}>Password</FormLabel>
        <Input type='password' onChange={(e) => { setPassword(e.target.value) }} /><br /><br />
        
        <Select placeholder='Select option' onChange={(e)=>setUser(e.target.value)}>
          <option value='Buyer'>Buyer</option>
          <option value='Seller'>Seller</option>
        </Select><br />

        <Flex justifyContent={"space-between"} >
          <Button colorScheme={'red'} onClick={handleSignup}>Submit</Button>
          <Text> Already signed up? <Link to={"/login"} style={{ color: "green", textDecoration: "underline" }}>Login</Link></Text>
        </Flex>
      </FormControl>

    </Container>
    </>
  )
}

export default Signup