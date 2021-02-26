import React from 'react'
import styled from 'styled-components'
import { ChatLink } from '../../ui/links';

const Chats = styled.div`
    font-size: 18px;
    padding: 10px 20px;   
`

const ListChats = (props) => {
    const listChats = props.chats.map( chat => {
        return(
            <ChatLink
                to={chat.to}
                key={chat.id}
                active={chat.active ? 1:0}
                onClick={() => props.changeChat(chat.id)}
            >
                {chat.name}
            </ChatLink>
        )
    })

    return (
        <>
            <Chats>Список чатов</Chats>
            {listChats}
        </>
    )
}
export default ListChats