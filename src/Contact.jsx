import { Button, Input, TextareaAutosize } from '@mui/material'
import React from 'react'
import styled from 'styled-components'



export default function Contact() {
    return (
        <>
            <Wrapper>
                <div className="container contact">
                    <div className="row  d-flex justify-content-between my-5">
                        <div className="col-md-5 m-3">
                            <iframe className='mapimage' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.4989612147965!2d78.4090873145719!3d29.14996536722525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bb16af61706bd%3A0x3fd97e682a20971!2sDZINE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1670062273511!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-5 m-3">
                            <form action="">
                                <Input type="text" placeholder='Name' className='inputName' />
                                <Input type="email" placeholder='E-mail' className='inputEmail' />
                                <TextareaAutosize name="text" id="" cols="30" rows="10" className='inputTextarea' placeholder='Review' />
                                <Button type="submit" variant="contained" className="d-block" > Submit </Button>

                            </form>
                        </div>
                    </div>


                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
.mapimage{
    width: 30rem;
    height: 28rem;
}
.contact{
min-height:30rem ;
}
    
    .inputName{
        width: 20rem;
        margin-bottom: 1rem;
    }
    .inputEmail{
        width: 20rem;
        margin-bottom: 1rem;
    }
    .inputTextarea{
        width:20rem; 
        margin-bottom: 1rem;
    }
`