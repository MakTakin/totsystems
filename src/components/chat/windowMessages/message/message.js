import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px 40px;
    position: relative;
    
    &:hover {
        background: #8883834d;
    }
`
const Name = styled.div`
    font-weight: bold;
`

const Text = styled.div``

const Message = ({ message, chooseMessage }) => {
    return (
        <MessageContainer
            onClick={() => chooseMessage(message.id)}
        >
            <Name>
                {message.senderName}
            </Name>
            <Text>
                {message.body}
            </Text>
        </MessageContainer>
    )
}
export default Message