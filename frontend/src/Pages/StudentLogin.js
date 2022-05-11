import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useHistory } from "react-router";
  import Login from "../components/Authentication/Login";

  function StudentLogin() {
    const history = useHistory();
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
  
      if (user) history.push("/chats");
    }, [history]);
  
    return (
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="darkgrey"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            ALT-F4's Chat App
          </Text>
        </Box>
        <Box bg="darkgrey" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>Student Login</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    );
  }
  
  export default StudentLogin;