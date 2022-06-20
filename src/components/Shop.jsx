import '../App.css';
import React, { Suspense, useCallback, useMemo, useRef } from 'react';
import { Fade } from 'react-slideshow-image';
import { fadeImages } from '../constants/constants';
import ParticleBackground from './ParticleBackground';
import styled from 'styled-components';

const TitleContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: black;
    z-index: 999;
`
const Title = styled.div`
    display: flex;
    width: 5%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin-top: 10px;
    background-color: black;
    background: linear-gradient(90deg, rgba(225,252,255,0.15545243619489557) 0%, rgba(225,252,255,0.17169373549883993) 35%);    

    backdrop-filter: blur(10px);

    h1 {
        margin-top: 10px;
        color: white;
        font-size: 25px;
        z-index:999;
    }
`

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
        height: 70%;
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
            font-size: 25px;
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

const ShopGrid = () => {
    return (
        <>
            <Body>
                <Card>
                    <h1>Shop</h1>
                    <br />
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni quisquam quaerat sapiente eos quasi impedit repellendus at, perferendis dolore illo nesciunt minima eveniet, cupiditate magnam laborum neque, atque qui dolores. Temporibus amet esse, obcaecati, labore hic cum nesciunt neque odit illum, quia iusto? Possimus, amet qui fuga iure tempora doloremque neque? Quas officia, aliquid eveniet sint suscipit error blanditiis. Natus impedit fuga iure in nihil et at doloribus facere doloremque unde ullam possimus adipisci exercitationem quam vero ea cum asperiores sapiente, perferendis qui. Labore debitis numquam voluptates, necessitatibus unde doloribus molestiae quod nisi suscipit quidem alias nostrum eum nihil.</h2>
                </Card>
            </Body>
        </>
    )
}

const Shop = () => {
    return (
        <GridContainer>
            <ShopGrid />
            <ParticleBackground />
        </GridContainer>
    );
};

export default Shop;
