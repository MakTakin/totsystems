import React from 'react'
import styled from 'styled-components'
import Message from './message/message';

const Window = styled.div`
    display: flex;
    flex-direction: column;
    background: #f5f2f5;
    height: calc(95vh - 245px);
    padding-top: 20px;
    position: relative;
    border-bottom: 1px solid #80808099;
    overflow: auto;
    ::-webkit-scrollbar { 
        width: 0;
        height: 0;
    }
    scrollbar-width: none;
    
    &:hover {
        ::-webkit-scrollbar {
            width: 8px; 
            height: 8px; 
            background-color: #988f8f1f;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #843465;
            border-radius: 9em;
        }
        scrollbar-color: #988f8f1f #843465;
    }
`

const WindowMessages = (props) => {
    const messages = props.messages.map( message => {
        return (
            <Message
                key={message.id}
                message={message}
                setMessage={props.setMessage}
                editMessage={props.editMessage}
                setRedactMessage={props.setRedactMessage}
                deleteMessage={props.deleteMessage}
            />
        )
    })

    return (
        <Window>
            {messages}
        </Window>
    )
}
export default WindowMessages