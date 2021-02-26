import styled from 'styled-components'
import {Link} from "react-router-dom"

export const ChatLink = styled(Link)`
    display: flex;  
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    height: 50px;
    padding-left:20px;
    box-sizing: border-box;
    text-decoration: none;
    color: #fff;
    background: ${props => props.active ? '#1374c1' : '#720064'};
    border: none;
    outline: none;
    
    &:hover {
        cursor: pointer;
        background: ${props => props.active ? '#1374c1' : '#8c408ac4'};
    }
`