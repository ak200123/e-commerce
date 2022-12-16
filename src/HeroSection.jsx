import React from 'react'
import styled from 'styled-components'

export default function HeroSection(props) {
    return (

        <Wrapper>
            <div className="container row justify-content-center my-5">
                <div className="col-md-5">
                    <h2>{props.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reiciendis obcaecati ipsam a in facere minus id corporis voluptas dicta unde corrupti quasi nobis, culpa cupiditate sunt iure iste soluta.</p>
                </div>
                <div className="col-md-5">
                    <img src={props.image} alt="" className='imagestyle' />
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`
.imagestyle{
    width: 30rem;
    height: 23rem;
}
`