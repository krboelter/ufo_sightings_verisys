import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <MenuContainer>
            <H2>UFO Sightings</H2>
            <List>
                <Li><Link to='/'>Home</Link></Li>
            </List>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    background-color: orange;
`

const H2 = styled.h2`
    font-size: 24px;
`

const List = styled.ul`
    width: 35%;
    display: flex;
    jusify-content: space-around;
`

const Li = styled.li`
    color: black;
`
