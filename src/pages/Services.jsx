import styled from 'styled-components'
import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";

export default function Services() {

    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                <div className="services-1">
                 <div>
                 <TbTruckDelivery className="icon"/>
                 <h3>Super fast and free Delivery</h3>
                 </div>
                </div>

                 <div className="services-2">
                 <div className="services-column-2">
                <div>

                <MdSecurity className="icon" />
                 <h3>Non-contact Shipping</h3>
                </div>
                 </div>
                 <div className="services-column-2">
                    <div>
                    <GiReceiveMoney className="icon"/>
                    <h3>Money-back Guaranted</h3>
                </div>
                </div>


            </div>
            <div className="services-3">
            <div>
               <RiSecurePaymentLine className="icon" />


            <h3>Super Secure Payment System</h3> 
            </div>
            </div>
            </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
padding: 9rem 0;
.grid{
    gap: 3rem;
}
.services-1,
.services-2,
.services-3{
    width: auto;
    height: 10rem;
    display: flex;
flex-direction: column;
justify-content: center;
    align-items: center;
    background: #eaeaea;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0, 0.05) 0px 1px 2px 0px;
}
.services-2{
    gap: 2.5rem;
    background-color: transparent;
    box-shadow: none;

.services-column-2{
    background: #eaeaea;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0, 0.05) 0px 1px 2px 0px;

}
}
div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.h3{
    margin-top: 1.4rem;
    font-size: 2rem;
}
.icon{
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color:white; 
    color: #5138ee;
}
`


{/* <div className="container-fluid services my-5">
<div className="container">
    <div className="row">
        <div className="col-md-10">
            <h3>Our Feature Services </h3>
        </div>
    </div>
    <div className="row justify-content-between d-flex">
        <div className="col-md-3 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24tC4hHY97RBVsUQ5pDOh92O-_Ufes3Guiw&usqp=CAU" alt="" className='mySimage' />

        </div>
        <div className="col-md-3 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWTbAnk1bomLVrOK05hZcEFlf7VdCAjKhThRRMYyWCzHAymLVDDadvMSsBTYrh0fYEfc&usqp=CAU" alt="" className='mySimage' />
        </div>

        <div className="col-md-3 ">
            <img src="https://kinclimg7.bluestone.com/f_jpg,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIDK0770U09_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-55553.png" alt="" className='mySimage' />
        </div>
    </div>
</div> */}


// </div>
// .services{
//     background-color:#d3dfeb;
// }

//     .mySimage{
     
//         height: 12rem;
//         width: 15rem;
//         background-size: cover;
     
//     }