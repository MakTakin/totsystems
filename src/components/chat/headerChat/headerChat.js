import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding:10px 20px;
    border-bottom: 1px solid #80808099;
    background: #fff;
`
const HeaderChat = ({name}) => {
    return (
        <Header>
            {name}
        </Header>
    )
}
export default HeaderChat