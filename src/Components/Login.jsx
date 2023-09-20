import { Button, Container, Flex, FormControl, FormLabel, Input, Text ,useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, {  useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Navbar from './Navbar';


const Login = () => {

  let toast=useToast();

    let [loginobj, setloginobj] = useState({
      email: "",
      password: ""
    })

    const { isAuth, setIsAuth } = useContext(AuthContext); 

     let navigate=useNavigate();

     let handleChange=(e)=>{
      setloginobj({...loginobj,[e.target.name]:e.target.value});
     }

     let handleLogin=async ()=>{
      let res = await axios.post("https://jade-giant-python.cyclic.cloud/login", loginobj);
      console.log(res);
      if (res.data.msg.includes("success")) {
        toast({
          position: 'top',
          title: 'Login Success.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
  
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userName", res.data.userName)
        setIsAuth(true);

      } else {
        alert(res.data.msg)
      }
     }



  return (

    <>
        <Navbar/>
    <Container mt={'100px'} boxShadow={'0 0 10px rgb(231,56,65)'} p={'25px'} borderRadius={'10px'}>
         
            <FormControl>
                <FormLabel color={'rgb(231,56,65)'}>Email address</FormLabel>
                <Input type='email' name={'email'} onChange={handleChange}/><br /><br />

                <FormLabel color={'rgb(231,56,65)'}>Password</FormLabel>
                <Input type='password' name={'password'} onChange={handleChange}/><br /><br />

               <Flex justifyContent={"space-between"} padding={"0 10px"}>
               <Button colorScheme={'red'} onClick={handleLogin}>Submit</Button>
               <Text> New user? <Link to={"/signup"} style={{color:"green",textDecoration:"underline"}}>Signup</Link></Text>
               </Flex>
            </FormControl>
        </Container>
    </>
  )
}

export default Login