import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/images/logo.png'

const Logotip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 28px;
    font-weight: bold; 
    border-bottom: 1px solid #80808099;
`
const Logo = () => {
    return (
        <Logotip>
            <img src={logo} alt="logotip"/>
            Network
        </Logotip>
    )
}
export default Logo