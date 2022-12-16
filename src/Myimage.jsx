import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(0);

    return (
        <Wrapper>
            <div className="grid grid-four-column">
                {imgs.map((curElm, index) => {
                    return (
                        <figure>
                            <img
                                src={curElm.url}
                                alt={curElm.filename}
                                className="box-image--style"
                                key={index}
                                onClick={() => setMainImage(index)}
                            />
                        </figure>
                    );
                })}
            </div>
            {/* 2nd column  */}

            <div className="main-screen">
                <img src={imgs[mainImage].url} alt={imgs[mainImage].filename} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: red ;
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: red ;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
 
`;

export default MyImage;