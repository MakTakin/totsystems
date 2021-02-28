import React from 'react'
import styled from 'styled-components'
import { EditButton } from '../../../ui/buttons';

const Edit = styled.div`
    justify-content: flex-end;
    padding: 10px 0;
    position: absolute;
    top: 0;
    right:0;
    z-index: 1;
`

const MessageContainer = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px 40px;
    position: relative;
    > ${Edit} {
        display: none;
    }
    &:hover {
        background: #8883834d;
        > ${Edit} {
            display: flex;
        }
    }
`

const Name = styled.div`
    font-weight: bold;
`

const Text = styled.div``

const Message = ({ message, editMessage, deleteMessage }) => {
    return (
        <MessageContainer>
            <Name>
                {message.senderName}
            </Name>
            <Text>
                {message.body}
            </Text>
            {message.fromMe == true ?
                <Edit>
                    <EditButton
                        onClick={() => deleteMessage(message.id)}
                    >
                        Удалить
                    </EditButton>
                    <EditButton
                        onClick={() => editMessage(message)}
                    >
                        Редактировать
                    </EditButton>
                </Edit> :
                null
            }
        </MessageContainer>
    )
}
export default Message