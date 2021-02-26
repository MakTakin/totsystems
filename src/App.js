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
    height:100vh;
    margin: 0 auto;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: "nav main";
`

const Main = styled.div``

function App() {
    const [chats, setChats] = useState(mockChats)
    const [activeChat, setActiveChat] = useState(mockChats[0])
    const [selectedMessage, setSelectedMessage] = useState(null)
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
    }

    const addNewMessage = (message) => {
        const newMessage = {
            id: uuid(),
            body: message,
            senderName: 'Aleksandr',
            fromMe: true,
        }
        const chatMessages = activeChat.messages
        const messages = [...chatMessages,newMessage]
        const changeActiveChatMessages = {...activeChat, messages}

        setActiveChat(changeActiveChatMessages)

        const allChats = [...chats].map( chat =>  chat.active == true ? changeActiveChatMessages : chat)

        setChats(allChats)
    }

    const chooseMessage = (id) => {
        const [selectMessage] = {...activeChat}.messages.filter( message => message.id == id)
        const message = selectMessage.fromMe == true ? selectMessage : null
        setSelectedMessage(message)
    }

    const deleteMessage = (id) => {
        const messages = activeChat.messages.filter( message => message.id !== id)
        const deletedActiveChatMessage = {...activeChat, messages}

        setActiveChat(deletedActiveChatMessage)

        const allChats = [...chats].map( chat =>  chat.active == true ? deletedActiveChatMessage : chat)

        setChats(allChats)
        setSelectedMessage(null)
    }

    const editMessage = (e) => {
        const message = {...redactMessage}
        message.body = e.target.value
        setRedactMessage(message)
    }

    const closeEditMessage = () => {
        setSelectedMessage(null)
        setRedactMessage(null)
    }

    const saveEditMessage = () => {
        const messages = activeChat.messages.map( message => message.id == redactMessage.id ? redactMessage : message)
        const editActiveChatMessage = {...activeChat, messages}

        setActiveChat(editActiveChatMessage)
        const allChats = [...chats].map( chat =>  chat.active == true ? editActiveChatMessage : chat)

        setChats(allChats)
        setSelectedMessage(null)
        setRedactMessage(null)
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
                               chat={activeChat}
                               selectedMessage={selectedMessage}
                               redactMessage={redactMessage}
                               setRedactMessage={setRedactMessage}
                               deleteMessage={deleteMessage}
                               editMessage={editMessage}
                               closeEditMessage={closeEditMessage}
                               saveEditMessage={saveEditMessage}
                               chooseMessage={chooseMessage}
                               addNewMessage={addNewMessage}/>
                           }
                           exact
                    />
                    <Redirect to='/'/>
                </Switch>
            </Main>
        </Container>
    );
}

export default App;
