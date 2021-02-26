import React from 'react'
import styled from 'styled-components'

const Logotip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 28px;
    font-weight: bold; 
    border-bottom: 1px solid grey;
`
const Logo = () => {
    return (
        <Logotip>
            Логотип
        </Logotip>
    )
}
export default Logo