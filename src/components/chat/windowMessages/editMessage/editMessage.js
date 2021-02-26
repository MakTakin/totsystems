import React from 'react'
import styled from 'styled-components'
import { EditButton } from '../../../ui/buttons';

const Edit = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    width: 100%;
    background: #ffffffbf;
    position: absolute;
    top: 0;
    z-index: 1;
`

const EditMessage = (props) => {
    return (
        <Edit>
            <EditButton
                onClick={() => props.deleteMessage(props.selectedMessage.id)}
            >
                Удалить
            </EditButton>
            <EditButton
                onClick={() => props.setRedactMessage(props.selectedMessage)}
            >
                Редактировать
            </EditButton>
        </Edit>
    )
}
export default EditMessage