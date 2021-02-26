import React from 'react'
import styled from 'styled-components'
import Logo from './logo/logo';
import ListChats from './listChats/listChats';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    background: #720064;
    font-size: 14px;
    color: white;
    border-radius: 5px 0 0 5px;s
`

const NavBar = (props) => {
    return (
        <Nav>
            <Logo/>
            <ListChats
                chats={props.chats}
                setChats={props.setChats}
                changeChat={props.changeChat}
            />
        </Nav>
    )
}
export default NavBar