import '../App.css';
import React, { Suspense, useCallback, useMemo, useRef } from 'react';
import { Fade } from 'react-slideshow-image';
import { fadeImages } from '../constants/constants';
import ParticleBackground from './ParticleBackground';
import styled from 'styled-components';

const GridContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    row-gap: 0rem;
    width: 40%;
    top: 10%;
    left: 38.5%;
    z-index: 995;
    position: fixed;
    height: 100%;

    @media (max-width: 860px){
        display: flex;
        flex-direction: column;
        align-content: center;
        left: 2.5%;
        top: 15%;
        row-gap: 0rem;
        width: 95%;
  }
`

const Card = styled.div`
        height: 90%;
        width: 100%;
        flex-direction: column;
        backdrop-filter: blur(4px);
        z-index: 998;
        background-image: url(fadeImage.url),

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            text-align: center;

            @media (max-width: 860px){
            height: 100%;
            }
        }

        h1 {
            font-size: 55px;
            font-family: "notMyType";
            color: white;
            width: 100%;
            text-align: center;
            z-index: 999;
        }

        h2 {
            font-size: 20px;
            font-family: "notMyType";
            color: white;
            width: 100%;
            text-align: left;
            z-index: 999;
        }

        p {
            text-align: center;
            color: white;
            font-size: 20px;
        }

        @media (max-width: 860px){
            height: 100%;
            display: flex;
            justify-content: center;
            align-content: end;
        }
    `

const PrintsGrid = () => {
    return (
        <>
            <Body>
                <Fade>
                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <Card>
                                <h1>Prints</h1>
                                <img src={fadeImage.url} />
                            </Card>
                            <h2>{fadeImage.caption}</h2>
                        </div>
                    ))}
                </Fade>
            </Body>
        </>
    )
}

const Prints = () => {
    return (
        <GridContainer>
            <PrintsGrid />
            <ParticleBackground />
        </GridContainer>
    );
};

export default Prints;
