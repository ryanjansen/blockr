import React from 'react';

import styled from 'styled-components';
import TodoList from './TodoList';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface AppProps {}

function App({}: AppProps) {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
