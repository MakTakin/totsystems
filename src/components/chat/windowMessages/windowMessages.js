import React from 'react'
import styled from 'styled-components'
import Message from './message/message';
import EditMessage from './editMessage/editMessage';
import RedactMessage from './redactMessage/redactMessage';

const Window = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 65vh;
    padding: 20px 0;
    position: relative;
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
                chooseMessage={props.chooseMessage}
                selectedMessage={props.selectedMessage}
            />
        )
    })

    return (
        <Window>
            { props.selectedMessage ?
                <EditMessage
                    selectedMessage={props.selectedMessage}
                    setRedactMessage={props.setRedactMessage}
                    deleteMessage={props.deleteMessage}
                /> :
                null
            }
            {messages}
            { props.redactMessage ?
                <RedactMessage
                    message={props.redactMessage}
                    editMessage={props.editMessage}
                    closeEditMessage={props.closeEditMessage}
                    saveEditMessage={props.saveEditMessage}
                /> :
                null
            }
        </Window>
    )
}
export default WindowMessages