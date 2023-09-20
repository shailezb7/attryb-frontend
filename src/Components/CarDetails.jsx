import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Image, Input, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const CarDetails = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext); 

    let toast=useToast();

    let [desc,setDesc]=useState("");
    let [price,setPrice]=useState(0);
    let [color,setColor]=useState("");
    let [mileage,setMileage]=useState(0);
    let [edit , setEdit] = useState(false);

    console.log(edit);


    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    let [type,setType]=useState("");
  
    let e = JSON.parse(localStorage.getItem("details"));
    console.log(e);

    let getUserType=async ()=>{
        let e = JSON.parse(localStorage.getItem("details"));
        let token=localStorage.getItem("token");
        let userID=localStorage.getItem("id");
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You may include other headers as needed
          };
       let resp=await axios.post('https://jade-giant-python.cyclic.cloud/check',{userID},{headers});
       setType(resp.data.type)
       console.log(resp.data.type);
    }

    let id=localStorage.getItem("id");

    let navigate=useNavigate();

    let Buy=()=>{
        
    }
    let Edit= async ()=>{
       let elem = JSON.parse( localStorage.getItem("details"));
       elem = {...e,description:desc,price:price,color:color,mileage:mileage}
       let resp= await axios.put(`https://jade-giant-python.cyclic.cloud/update/${id}`,{desc,price,color,mileage})
       localStorage.setItem("details",JSON.stringify(elem));
       console.log(resp)
       navigate('/cardetails');
    }

    useEffect(()=>{
        getUserType();
        console.log(edit);
    },[edit])

    return (
      <>
      <Navbar/>
        <Container m={'auto'} mt={'20px'} textAlign={'center'} bg={'red.100'} 
        p={'20px'} borderRadius={'10px'} maxW={'800px'} >
            <Heading>{e.name}</Heading><br />

            <Box > <Image src={e.imageUrl} borderRadius={'10px'} margin={'auto'}></Image></Box><br />

            <Text fontSize={'20px'} fontWeight={'bold'}>Description: {e.description}</Text><br />

            <Text fontSize={'20px'} fontWeight={'bold'}>Price: {e.price}</Text><br />

            <Text fontSize={'20px'} fontWeight={'bold'}>Color: {e.color}</Text><br />

            <Text fontSize={'20px'} fontWeight={'bold'}>Mileage: {e.mileage} lit/km</Text><br />

            {
              type=="Seller" ?  
              <Box> 
              <Flex justifyContent={'space-evenly'}>
              <Button onClick={onOpen} colorScheme='red'>Edit</Button> 
              <Button colorScheme='teal'
            onClick={()=>{setIsAuth(false)}}>Logout</Button>
              </Flex>
         
        
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader >Edit </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Input ref={initialRef} placeholder='Description' 
                      onChange={(e)=>{setDesc(e.target.value)}}/>
                    </FormControl>
        
                    <FormControl mt={4}>
                      <FormLabel>Price</FormLabel>
                      <Input placeholder='Price' onChange={(e)=>{setPrice(e.target.value)}} />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Color</FormLabel>
                      <Input placeholder='Color' onChange={(e)=>{setColor(e.target.value)}}/>
                    </FormControl>
                    <FormControl mt={4}>

                      <FormLabel>Mileage</FormLabel>
                      <Input placeholder='Mileage' onChange={(e)=>{setMileage(e.target.value)}}/>
                    </FormControl>
                  </ModalBody>
        
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={()=>{Edit() 
                    setEdit(!edit) 
                    onClose()}}>
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal></Box> 

                : 
                
               <Box> 
                 <Flex justifyContent={'space-evenly'}>
              <Button onClick={onOpen} colorScheme='red'>Buy</Button> 
              <Button colorScheme='teal'
            onClick={()=>{setIsAuth(false)}}>Logout</Button>
              </Flex>
         
               <Modal
                 initialFocusRef={initialRef}
                 finalFocusRef={finalRef}
                 isOpen={isOpen}
                 onClose={onClose}
               >
                 <ModalOverlay />
                 <ModalContent>
                   <ModalHeader>Payment Details</ModalHeader>
                   <ModalCloseButton />
                   <ModalBody pb={6}>
                   <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input ref={initialRef} placeholder='Name' />
                    </FormControl>
        
                    <FormControl mt={4}>
                      <FormLabel>Card No.</FormLabel>
                      <Input placeholder='Card No.' />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>CVV</FormLabel>
                      <Input placeholder='CVV' />
                    </FormControl>
                    <FormControl mt={4}>

                      <FormLabel>PIN</FormLabel>
                      <Input placeholder='PIN' />
                    </FormControl>
                   </ModalBody>
         
                   <ModalFooter>
                     <Button colorScheme='blue' mr={3}
                     onClick={
                        ()=>{
                            toast({
                                position: 'top',
                                title: 'Buying Successfull.',
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                              })
                              onClose();
                              navigate('/cardisplay')
                        }
                     }
                     >
                       Save
                     </Button>
                     <Button onClick={onClose}>Cancel</Button>
                   </ModalFooter>
                 </ModalContent>
               </Modal></Box>
            }

        </Container>
      </>
    )
}

export default CarDetails