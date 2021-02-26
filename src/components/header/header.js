import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/images/avatar.png'
import { HeaderButton } from '../ui/buttons';

const HeaderNetwork = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    height: 50px;
    background: #720064;
    padding: 0 20px 0 10px;
    color: white;
    border-radius: 0 10px 0 0;
    border-bottom: 1px solid #80808099;
`
const Network = styled.div`
    font-size: 28px;
    font-weight: bold;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
`

const UserName = styled.div`
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`

const Header = () => {
    return (
        <HeaderNetwork>
            <Network>Чаты компании</Network>
            <Profile>
                <UserName>Aleksandr Bogatov</UserName>
                <HeaderButton>
                    <img src={avatar} alt="avatar"/>
                </HeaderButton>
            </Profile>
        </HeaderNetwork>
    )
}
export default Header