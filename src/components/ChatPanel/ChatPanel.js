import React, { useContext } from 'react';
import AuthContext from '../../AuthContext';
import { Flex, Stack, Box, Text, Link, Divider } from '@chakra-ui/react';
import Channel from './Channel';

const ChatPanel = () => {

    const { setAuthenticated, nickname } = useContext(AuthContext);
    const handleLogout = () => setAuthenticated(false);

    return (
        <Flex minHeight="100vh" align="flex-start" justify="center" bg="gray.200">
            <Stack spacing={8} width="full" mx="auto" py={6} px={6}>
                <Box rounded="lg" bg="white" boxShadow="lg" p={4}>
                    <Text textAlign="right">Hello <strong>{nickname}</strong>!
                        {" | "}
                        <Link onClick={handleLogout}>Log out</Link>
                    </Text>
                    <Divider />
                    <Channel />
                </Box>
            </Stack>
        </Flex>
    );
}
export default ChatPanel;