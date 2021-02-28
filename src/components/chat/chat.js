import React from 'react'
import WindowMessages from './windowMessages/windowMessages';
import TextField from './textField/textField';
import HeaderChat from './headerChat/headerChat';
import { v4 as uuid } from 'uuid';

const Chat = ({activeChat, setActiveChat, chats, setChats, message, setMessage, redactMessage, setRedactMessage}) => {
    const addMessage = (e) => {
        e.preventDefault()
        let messages
        if (redactMessage == null) {
            const newMessage = {
            id: uuid(),
            body: message,
            senderName: 'Aleksandr',
            fromMe: true,
            }
            const chatMessages = activeChat.messages
            messages = [...chatMessages, newMessage]
        } else {
            const editMessage = {...redactMessage,body: message}
            messages = activeChat.messages.map(message => message.id == editMessage.id ? editMessage : message)
            setRedactMessage(null)
        }

        const changeActiveChatMessages = { ...activeChat, messages }

        setActiveChat(changeActiveChatMessages)

        const allChats = [...chats].map(chat => chat.active == true ? changeActiveChatMessages : chat)

        setChats(allChats)
        setMessage('')
    }

    const submitEnter = (e) => {
        if (e.code === 'Enter') {
            addMessage(e)
        }
    }

    const deleteMessage = (id) => {
        const messages = activeChat.messages.filter(message => message.id !== id)
        const deletedActiveChatMessage = { ...activeChat, messages }

        setActiveChat(deletedActiveChatMessage)

        const allChats = [...chats].map(chat => chat.active == true ? deletedActiveChatMessage : chat)

        setChats(allChats)
    }

    const editMessage = (message) => {
        setMessage(message.body)
        setRedactMessage(message)
    }

    const closeEditMessage = () => {
        setRedactMessage(null)
        setMessage('')
    }


    return (
        <>
            <HeaderChat
                name={activeChat.name}
            />
            <WindowMessages
                messages={activeChat.messages}
                setMessage={setMessage}
                redactMessage={redactMessage}
                setRedactMessage={setRedactMessage}
                deleteMessage={deleteMessage}
                editMessage={editMessage}
                closeEditMessage={closeEditMessage}
            />
            <TextField
                addMessage={addMessage}
                message={message}
                setMessage={setMessage}
                submitEnter={submitEnter}
                redactMessage={redactMessage}
                closeEditMessage={closeEditMessage}
            />
        </>
    )
}
export default Chat