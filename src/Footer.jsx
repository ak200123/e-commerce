import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <>
            <Wrapper>
                <div className="container-fluid myfootercolor">
                    <div className="container">

                        <div className="row justify-content-around pt-4">
                            <div className="col-md-3">
                                <i class="bi bi-telephone myfirst"></i>
                                <p className='myfirsttext'>(+91) 9027038732</p>
                            </div>
                            <div className="col-md-3">
                                <i class="bi bi-envelope-at myfirst"></i>
                                <p className='myfirsttext'>hello@papagi1.com</p>
                            </div>
                            <div className="col-md-3">
                                <i class="bi bi-geo-alt myfirst"></i>
                                <p className='myfirsttext'>Near Bus Stand,Noorpur</p>
                            </div>
                        </div><hr />

                        <div className="row justify-content-around py-3">
                            <div className="col-md-2">
                                <h3>About</h3>
                                Our Story <br />
                                Awards <br />
                                Our Team <br />
                                Career
                            </div>
                            <div className="col-md-2">
                                <h3>Company</h3>
                                Our Services <br />
                                Clients <br />
                                Contact <br />
                                Press
                            </div>
                            <div className="col-md-2">
                                <h3>Resources</h3>
                                Blogs <br />
                                Newsletters <br />
                                Privacy Policys
                            </div>
                            <div className="col-md-4">
                                <h3>Subscribe</h3>
                                <input type="email" placeholder='Your  Email' />
                                <p>Get digital marketing updates in your mailbox</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center pb-3">
                            <div className="col-md-3   ">
                                <a href="" className='myicon'> <i class="bi  bi-facebook"></i></a>
                                <a href="" className='myicon'><i class="bi   bi-linkedin"></i></a>
                                <a href="" className='myicon'><i class="bi   bi-twitter"></i></a>
                                <a href="" className='myicon'><i class="bi   bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
.myfootercolor{
    background-color: hsl(191 53% 59% / 1);
    
}
    .myfirst{
        font-size: 30px;
        color: white;
        transition: all 0.3s ease;
        &:hover{
            transform: font-size scale(1.1);
            border: 1px solid black;
        }
    }
    .myfirsttext{
    
    font-size: 18px;
    }
    .myicon{
        text-decoration: none;
        color: white;
        font-size: 22px;
        padding: 10px;
        align-items: center;
        transition: all 0.3s ease-in-out;
           &:hover{
               transform: scale(1.1);
               background-color: black;
           }
 }

    
`