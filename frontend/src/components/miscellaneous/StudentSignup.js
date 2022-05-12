import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";


const StudentSignup = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [name, setName] = useState();

  const submitHandler = async () => {

    console.log(name);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
           Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/user/student",
        {
          name,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };


  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lightgrey" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="30px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            Register a new student account
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
                <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
   
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>  
      
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>    
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StudentSignup;
