import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';

const convertDate = (timestamp) => {
    const datetime = new Date(timestamp);
    return `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}

const Message = ({ message }) => {

    return (
        <Box rounded="lg" bg="white" boxShadow="lg" p={6}>
            <Text py={2} color="grey">{message.user} {convertDate(message.datetime)}</Text>
            <Divider />
            <Text py={2}>{message.content}</Text>
        </Box>
    );
}
export default Message;