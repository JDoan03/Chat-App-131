import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { user, ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ user, handleFunction }) => {


  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Box>
        <Text>{user.name}</Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
