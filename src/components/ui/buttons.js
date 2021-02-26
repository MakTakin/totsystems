import styled from 'styled-components'

export const HeaderButton = styled.button`
    border: none;
    outline: none;
    background: #720064;
    
    &:hover {
    cursor: pointer;
    }
`

export const SendButton = styled.button`
    border: none;
    outline: none;
    background: ${props=> props.active ? 'green' : 'white'};
    padding: 5px 5px 5px 10px;
    border-radius: 5px;
    
    &:hover {
        cursor: pointer;
    }
`

export const EditButton = styled.button`
    border: none;
    outline: none;
    margin: 0 10px;
    padding: 10px;
    border-radius: 5px;
    background: #1374c1;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        background: #03a9f4;
    } 
`
