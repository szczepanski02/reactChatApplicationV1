import React, { useContext } from 'react';
import { Button, Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import AuthContext from '../../AuthContext';

const LoginForm = () => {
    const { setAuthenticated, setNickname } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const { nickname } = e.target.elements;
        setAuthenticated(true);
        setNickname(nickname.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <FormControl isRequired>
                    <FormLabel>Nickname</FormLabel>
                    <Input type="text" name="nickname" placeholder="nickname"></Input>
                </FormControl>
                <Button type="submit" colorScheme="blue">Login</Button>
            </Stack>
        </form>
    );
}
export default LoginForm;
