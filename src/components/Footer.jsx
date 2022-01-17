import styled from "styled-components";
import { Link } from 'react-router-dom'
import ArrowUp from "./ArrowUp";

const Footer = () => {

    const gotoTop = () => { window.scrollTo(0,0); }
    return (
        <>
            <Container>
                <Links>
                    <Link to="/">Home</Link>
                    <Link to="/birds">Birds</Link>
                    <Link to="/landscapes">Landscapes</Link>
                    <Link to="/wildlife">Wildlife</Link>
                </Links>
                <Arrow onClick={gotoTop}>
                    <ArrowUp />
                </Arrow>
            </Container>
            <Copyright>
                <div>All content Copyright © {new Date().getFullYear()} Aspicientis Lux</div>
            </Copyright>
        </>
    )
}

const Container = styled.div`
    width:100vw;
    padding-right: 7vw;
    padding-left: 7vw;
    padding-top: 30px;
    flex-wrap: wrap;
    min-height: 85px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    @media (min-width: 768px) {
        padding-right: 5.75vw;
        padding-left: 5.75vw;
        min-height: 105px;
        flex-wrap: nowrap;
        flex-direction: row;
    }

    @media (min-width: 992px) {
        padding-right: 4.75vw;
        padding-left: 4.75vw;
        min-height: 125px;
    }

    @media (min-width: 1200px) {
        padding-right: 4.75vw;
        padding-left: 4.75vw;
    }
`

const Links = styled.div`
    display: flex;
    flex: 1 1 auto;
    font-family: 'Forum';
    font-size: 0.88rem;
    text-transform: uppercase;
    color: #2d2d2d;
    letter-spacing: 3.25px;
    justify-content: center;
    margin-left: -1vw;
    margin-right: -1vw;

    @media (min-width: 768px) { justify-content: left; }

    a {
        padding: 3px 1vw;
        text-decoration: none;
        color: #2d2d2d;
        &:hover { opacity: 0.5; }
    }
`

const Arrow = styled.div`
    flex: 0 0 auto;
    margin: 30px auto;
    width: 0.5em;
    color:black;
    cursor: pointer;
`
const Copyright = styled.div`
    font-size: min(0.875rem, 1rem + -0.14vh);
    font-family: "Cormorant Garamond", serif;
    color: #2d2d2d;

    width:100vw;
    padding-right: 7vw;
    padding-left: 7vw;
    padding-bottom: 30px;
    display: flex;
    box-sizing: border-box;

    justify-content: center;

    @media (min-width: 768px) {
        padding-right: 5.75vw;
        padding-left: 5.75vw;
        justify-content: left;
    }

    @media (min-width: 992px) {
        padding-right: 4.75vw;
        padding-left: 4.75vw;
    }

    @media (min-width: 1200px) {
        padding-right: 4.75vw;
        padding-left: 4.75vw;
    }
`

export default Footer;