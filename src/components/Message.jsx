import styled from "styled-components";
import Header from './Header'

const Message = ({header, variant, children}) => {

    return (
        <Container>
            <Header variant={variant}>{header}</Header>
            {children}
        </Container>
    )
}

export default Message;

const Container = styled.div`
    padding: 5.5vmax 4.75vw;
    @media (min-width: 576px) { padding: 40px 7vw; }
    @media (min-width: 768px) { padding: 40px 5.75vw; }
    @media (min-width: 1200px) { padding: 40px 4.75vw; }
    box-sizing: border-box;
`