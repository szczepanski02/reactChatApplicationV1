import React, { useState, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';

import Message from './Message';
import MessageForm from './MessageForm';
import db from '../../config';

const Channel = () => {
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        // on nasłuchuje na bazę danych, once pobiera dane tylko raz
        db.ref('/messages').on('value', (snapshot) => {
            const fbMessages = snapshot.val();
            const convertedMessages = Object.entries(fbMessages || {}).map(([id, message]) => ({
                ...message,
                id
            }));
            setMessage(convertedMessages);
        });
    }, []);

    return (
        <Stack spacing={8} py={6}>
            {messages.map((message) => (
                <Message key={message.id} message={message}/>
            ))};
            <MessageForm />
        </Stack>
    );
}
export default Channel;