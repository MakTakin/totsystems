// import React from 'react'
// import { InputText } from '../../../ui/inputs';
// import { EditButtonText } from '../../../ui/buttons';
// import styled from 'styled-components'
// import close from '../../../../assets/images/close.png'
// import done from '../../../../assets/images/done.png'
//
// const EditText = styled.div`
//     display: flex;
//     align-items: flex-end;
//     border: 1px solid grey;
//     border-radius: 5px;
//     margin: auto 20px 0 20px;
//     padding: 10px 5px;
// `
//
// const Buttons = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
// `
//
//
// const RedactMessage = ({ message, editMessage, closeEditMessage, saveEditMessage }) => {
//
//     return (
//         <EditText>
//             <InputText
//                 onChange={(e) => editMessage(e)}
//                 value={message.body}
//             />
//             <Buttons>
//                 <EditButtonText
//                     onClick={() => closeEditMessage()}
//                 >
//                     <img src={close} alt="close"/>
//                 </EditButtonText>
//                 <EditButtonText
//                     onClick={() => saveEditMessage()}
//                 >
//                     <img src={done} alt="done"/>
//                 </EditButtonText>
//             </Buttons>
//         </EditText>
//     )
// }
// export default RedactMessage