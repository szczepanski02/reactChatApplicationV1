import React, { useState ,useContext } from 'react';
import { HStack, Input, Button } from '@chakra-ui/react';
import AuthContext from '../../AuthContext';
import db from '../../config';

const MessageForm = () => {

    const { nickname } = useContext(AuthContext);
    const [newMessage, setNewMessage] = useState('');

    const handleContentChange = e => setNewMessage(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const messageObj = {
            user: nickname,
            content: newMessage,
            datetime: Date.now()
        };
        if(newMessage) {
            db.ref('/messages').push(messageObj)
            .then(() => {
                setNewMessage('');
                window.scrollTo(0, document.body.scrollHeight);
            })
            .catch(err => console.error(err));
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <Input type="text" name="content" value={newMessage} onChange={handleContentChange}  />
                <Button type="submit" colorScheme="blue">Send</Button>
            </HStack>
        </form>
    );
}
export default MessageForm;