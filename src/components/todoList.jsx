import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './todoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    
    padding-bottom: 48px;
    overflow-y: auto;
    
`;

class TodoList extends Component {
    render() {
        return (
            <TodoListBlock>
                <TodoItem text="프로젝트 생성하기" done={true}></TodoItem>
                <TodoItem text="컴포넌트 스타일링 하기" done={true}></TodoItem>
                <TodoItem text="Context 만들기" done={false}></TodoItem>
                <TodoItem text="기능 구현하기" done={false}></TodoItem>
            </TodoListBlock>
        );
    }
}


export default TodoList;