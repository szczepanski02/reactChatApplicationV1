import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { LoginFormPage } from './components/LoginForm';
import { ChatPanel } from './components/ChatPanel';
import { Provider as AuthProvider } from './AuthContext';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [nickname, setNickname] = useState('');

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider value={{ authenticated, setAuthenticated, nickname, setNickname }}>
        {authenticated ? <ChatPanel /> : <LoginFormPage />}
      </AuthProvider>
    </ChakraProvider>
  );
}
export default App;
