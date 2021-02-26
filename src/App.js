import styled from 'styled-components'
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import Chat from './components/chat/chat';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { mockChats } from './constants/constants';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
    max-width: 1200px;
    height:95vh;
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid grey;
    box-shadow: 0px 0px 13px 3px #696868;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: "nav main";
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    height:auto;
    background: #f5f2f5;
    border-radius: 0 10px 0 0;
`

function App() {
    const [chats, setChats] = useState(mockChats)
    const [activeChat, setActiveChat] = useState(mockChats[0])

    const changeChat = (id) => {
        const changeChats = [...chats]

        changeChats.forEach(chat => {
            if (chat.id == id) {
                chat.active = true
                setActiveChat(chat)
            } else {
                chat.active = false
            }
        })
        setChats(changeChats)
    }

    return (
        <Container>
            <NavBar
                chats={chats}
                setChats={setChats}
                changeChat={changeChat}
            />
            <Main>
                <Header/>
                <Switch>
                    <Route path='/'
                           render={() => <Chat
                               activeChat={activeChat}
                               setActiveChat={setActiveChat}
                               chats={chats}
                               setChats={setChats}/>
                           }
                    />
                    <Redirect to='/'/>
                </Switch>
            </Main>
        </Container>
    );
}

export default App;
