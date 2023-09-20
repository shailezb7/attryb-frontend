import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import Navbar from './Navbar';

const AddCar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext); 

    let [name,setName] = useState("");
    let [imageUrl,setImage] = useState("");
    let [description,setDesc] = useState("");

    let [price,setPrice] = useState(0);

    let [color,setColor] = useState("");

    let [mileage,setMileage] = useState(0);

    let handleAdd= async ()=>{
        const token = localStorage.getItem("token");
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You may include other headers as needed
          };
        // console.log(name,image,desc,price,color,mileage);
        let resp=await axios.post('https://jade-giant-python.cyclic.cloud/cars/create',
        {name,imageUrl,description,price,color,mileage},
        {headers}
        )
        console.log(resp);
    }


    return (

        <Box>
            <Navbar/>
            <Container boxShadow={'0 0 5px orange'} mt={'50px'} p={'20px'} borderRadius={'10px'} >
                
                <FormControl alignItems={'center'} >
                    <FormLabel>Car Name</FormLabel>
                    <Input type='text' onChange={(e)=>{setName(e.target.value)}}/><br /><br />

                    <FormLabel>Car Image</FormLabel>
                    <Input type='text' onChange={(e)=>{setImage(e.target.value)}} /><br /><br />

                    <FormLabel>Description</FormLabel>
                    <Textarea onChange={(e)=>{setDesc(e.target.value)}}/>  <br /><br />

                    <FormLabel>Price</FormLabel>
                    <Input type='Number' onChange={(e)=>{setPrice(e.target.value)}} /><br /><br />

                    <FormLabel>Color</FormLabel>
                    <Input type='text' onChange={(e)=>{setColor(e.target.value)}} /><br /><br />

                    <FormLabel>Mileage</FormLabel>
                    <Input type='Number' onChange={(e)=>{setMileage(e.target.value)}} /><br /><br />

                   
                   <Flex justifyContent={'space-evenly'}>
                   <Button colorScheme='red' onClick={handleAdd} >Add Car</Button>
                   <Button colorScheme='teal'
            onClick={()=>{setIsAuth(false)}}>Logout</Button>
                    </Flex> 
                    
                </FormControl>
            </Container>
        </Box>

    )
}

export default AddCar