import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function PageNavigation({ title }) {
    return (
        <Wrapper>
            <NavLink to="/">Home</NavLink>/{title}
        </Wrapper >
    )
}

const Wrapper = styled.section`
height:4.3rem;
padding-top:1rem;
background-color:#f1ffff;
display:flex;
justify-content:flex-start;
font-size:1.2rem;
padding-left:1.2rem;
a{
    font-size:1.2rem;
}
`