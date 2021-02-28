import React from 'react'
import styled from 'styled-components'
import { CloseButton, SendButton } from '../../ui/buttons';
import { InputText } from '../../ui/inputs';
import sendImg from '../../../assets/images/sendButton.png'
import close from '../../../assets/images/close.png'

const Form = styled.form`
    display: flex;
    align-items: flex-end;
    height: 75px;
    background: #fff;
    border: 1px solid grey;
    border-radius: 5px;
    margin: auto 20px 20px 20px;
    padding: 10px 5px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`


const TextField = (props) => {

    return (
        <Form
            onSubmit={(e) => props.addMessage(e)}
            onKeyDown={e => props.submitEnter(e)}
        >
            <InputText
                placeholder='Send message'
                value={props.message}
                onChange={(e) => props.setMessage(e.target.value)}
            />
            <Buttons>
            { props.redactMessage ?
                <CloseButton
                    type='button'
                    onClick={() => props.closeEditMessage()}
                >
                    <img src={close} alt="close"/>
                </CloseButton> : null
            }
            <SendButton active={props.message} type="submit">
                <img src={sendImg} alt="sendMessage"/>
            </SendButton >
            </Buttons>
        </Form>
    )
}
export default TextField