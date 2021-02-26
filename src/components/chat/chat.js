import React from 'react'
import WindowMessages from './windowMessages/windowMessages';
import TextField from './textField/textField';
import HeaderChat from './headerChat/headerChat';

const Chat = (props) => {
    return (
        <>
            <HeaderChat
                name={props.chat.name}
            />
            <WindowMessages
                messages={props.chat.messages}
                chooseMessage={props.chooseMessage}
                selectedMessage={props.selectedMessage}
                redactMessage={props.redactMessage}
                setRedactMessage={props.setRedactMessage}
                deleteMessage={props.deleteMessage}
                editMessage={props.editMessage}
                closeEditMessage={props.closeEditMessage}
                saveEditMessage={props.saveEditMessage}
            />
            <TextField
                addNewMessage={props.addNewMessage}
            />
        </>
    )
}
export default Chat