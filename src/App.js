import styled from 'styled-components'
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import Chat from './components/chat/chat';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { mockChats } from './constants/constants';

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
    const [message, setMessage] = useState('')
    const [redactMessage, setRedactMessage] = useState(null)

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
        setMessage('')
        setRedactMessage('')
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
                               message={message}
                               setMessage={setMessage}
                               chats={chats}
                               setChats={setChats}
                               redactMessage={redactMessage}
                               setRedactMessage={setRedactMessage}/>
                           }
                    />
                    <Redirect to='/'/>
                </Switch>
            </Main>
        </Container>
    );
}

export default App;
