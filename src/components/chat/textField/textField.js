import React, { useState } from 'react'
import styled from 'styled-components'
import { SendButton } from '../../ui/buttons';
import { InputText } from '../../ui/inputs';
import sendImg from '../../../assets/images/sendButton2.png'

const Form = styled.form`
    display: flex;
    align-items: flex-end;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 0 20px;
    padding: 10px 5px;
`


const TextField = (props) => {
    const [message, setMessage] = useState('')

    const addMessage = (e) => {
        e.preventDefault()
        props.addNewMessage(message)
        setMessage('')
    }

    return (
        <Form onSubmit={(e) => addMessage(e)}>
            <InputText
                placeholder='Send message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <SendButton active={message} type="submit">
                <img src={sendImg} alt="sendMessage"/>
            </SendButton >
        </Form>
    )
}
export default TextField