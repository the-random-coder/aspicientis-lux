import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Close from './Close'

const Overlay = ({setShowOverlay}) => {

    const hide = () => { setShowOverlay(false); }

    return (
        <Container>
            <Close onClick={() => setShowOverlay(false) } />
            <List>
                <li onClick={hide}><Link to="/">Home</Link></li>
                <li onClick={hide}><Link to="/birds">Birds</Link></li>
                <li onClick={hide}><Link to="/wildlife">Wildlife</Link></li>
                <li onClick={hide}><Link to="/landscapes">Landscapes</Link></li>
            </List>
        </Container>
    )
}

const List = styled.ul`
    padding: 20vh 0 25vh;
    height: 100vh;

    li {
        display: flex;
        justify-content: center;
    }

    li a {
        text-decoration: none;
        color: #2d2d2d;
        &:hover { opacity: 0.5; }
        font-family: 'Forum';
        max-width: 85%;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: min(2.25rem, 1rem + 1.39vh);
    }
`

const Container = styled.div`
    background-color: #f1f1f1;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
    overflow:hidden;
`

export default Overlay;