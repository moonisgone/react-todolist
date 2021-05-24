import { createGlobalStyle } from 'styled-components';
import './app.css';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';
import TodoTemplate from './components/todoTemplate';
import TodoCreate from './components/todoCreate';


const GlobalStyle = createGlobalStyle`
body{
  background : #e9ecef;
}
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>

      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </>
  );
}

export default App;
