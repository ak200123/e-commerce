import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Nav = () => {


    let sidemenu = document.getElementById("sidemenu");
    // console.log(sidemenu)
    function openmenu() {
        const Right = {
            right: "0"
        }
        sidemenu.classList.add(Right);
    }

    function closemenu() {
        const Right = {
            right: "-200px"
        }
        sidemenu.classList.add(Right);
    }



    return (
        <>
            <Wrapper>


                <div className="container-fluid " id="header" >
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-3">
                            <Link to="/" > <img src="./images/logo.png" alt=" kio nahi aa rahi hai" className="logo" /> </Link>

                        </div>
                        <div className="col-md-5 d-flex pt-2">
                            <nav>
                                <ul id='sidemenu'>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/myproduct">Product</Link>
                                    </li>
                                    <i className="bi bi-x-circle-fill" onClick={openmenu} ></i>
                                </ul>
                                <i className="bi bi-list" onClick={closemenu}></i>
                            </nav>
                        </div>
                        <div className="col-md-3 d-flex">
                            <Button type="submit" variant="contained" className=" d-block logincolor" > Login </Button>
                            <Button type="submit" variant="contained" className="d-block logincolor" > Sign up </Button>
                        </div>
                    </div>
                </div>




            </Wrapper>
        </>
    )
}


const Wrapper = styled.section`
.logo{
    width: auto;
    height: 50px;
}
    #header{
    width: 100%;
    height: 75px;
    background-color: hsl(191 53% 59% / 1);
    /* background-image: url('thanos.jpg'); */
    background-size: cover;
    background-position: center;
}
.logincolor{
    background-color:white;
    color:hsl(191 53% 59% / 1);
    margin-right: 2rem;
    font-weight: 550;
    transition-duration: 0.3s all ease-in;
    &:hover{
        transform:scale(1.1);
        background-color: #dae5e4;
    }
}

.container{
    padding: 10px 10%;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
 li{
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
}
a{
   color: rgb(255, 255, 255);
   text-decoration: none;
   font-size: 20px;
   position: relative;
   &::after{
    content: '';
    width: 0;
    height: 3px;
    /* background: #ff004f; */
    background: white;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.3s;

}
&:hover::after{
    transform: scale(1.1);
    width: 100%;
}
}
}
.bi{
    display: none;
}

@media only screen and (max-width: 600px){
    #header{
        /* background-image: url(); */
    }
  
    .bi{
        display: block;
        font-size: 25px;
    }
    ul {
        background: hsl(191 53% 59% / 1);;
        position: fixed;
        top: 0;
        /* right: 0; */
        right: -200px;
        width: 200px;
        height: 100vh;
        padding-top: 50px;
        z-index: 2;
        transition: right 0.5s;
    }
   li{
        display: block;
        margin: 25px;
    }
     .bi{
        position: absolute;
        top: 25px;
        left: 25px;
        cursor: pointer;
    }
}
`

export default Nav