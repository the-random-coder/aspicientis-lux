import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = ({setShowOverlay}) => {
    return (
        <Nav>
            <Section justify="start">
                <Link to="/">Home</Link>
            </Section>
            <Brand>Aspicientis Lux</Brand>
            <Section justify="flex-end">
                <Link to="/birds">Birds</Link>
                <Link to="/landscapes">Landscapes</Link>
            </Section>
            <Hamburger onClick={() => setShowOverlay(true)} />
        </Nav>
    )
}

export default Navigation;

const Section = styled.div`
    display: flex;
    flex: 1 1 33%;
    font-family: 'Forum';
    font-size: 0.88rem;
    text-transform: uppercase;
    color: #2d2d2d;
    letter-spacing: 3.25px;
    justify-content: ${p => p.justify};
    margin-left: -1vw;
    margin-right: -1vw;
    display:none;

    @media (min-width: 992px) { display: inherit; }

    a {
        padding: 3px 1vw;
        text-decoration: none;
        color: #2d2d2d;
        &:hover { opacity: 0.5; }
    }
`

const Brand = styled.div`
    display: flex;
    flex: 1 1 33%;
    font-family: 'Forum';
    font-size: 1.125rem;
    text-transform: uppercase;
    color: #2d2d2d;
    letter-spacing: 3.25px;
    justify-content: center;
`

const Nav = styled.nav`
    width:100vw;
    padding-right: 7vw;
    padding-left: 7vw;
    flex-wrap: nowrap;
    min-height: 85px;
    display: flex;
    box-sizing: border-box;
    align-items: center;

    @media (min-width: 768px) {
        padding-right: 5.75vw;
        padding-left: 5.75vw;
        min-height: 105px;
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

const Hamburger = ({onClick}) => {
    return (
        <Base>
            <div onClick={onClick} />
        </Base>
    )
}

const Base = styled.div`

    display:inherit;
    @media (min-width: 992px) { display: none; }
    flex: 0 0 20px;
    height:20px;
    display: flex;
    flex-direction: column;

    div {
        border-top:1px solid #000000;
        border-bottom:1px solid #000000;
        margin-top:3px;
        height: 12px;
        margin-bottom: 3px;
        cursor: pointer;
    }
`