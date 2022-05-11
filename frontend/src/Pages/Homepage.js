import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    LinkBox,
    LinkOverlay,
    Heading,
    Button,
    Fade,
    Link
  } from "@chakra-ui/react";


  
  function Homepage() {

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
            Welcome to ALT-F4's chat app! :)
          </Text>
        </Box>
        
        <Box bg="darkgrey" w="100%" p={4} borderRadius="lg" borderWidth="1px">

        <Link href='/teacher' passHref>
          <Button>Teacher</Button>
        </Link>

        <Link href='/student' passHref>
          <Button>Student</Button>
        </Link>

        </Box>
      </Container>
    );


    }
  
  export default Homepage;