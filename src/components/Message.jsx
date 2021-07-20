import styled from "styled-components";
import Header from './Header'

const Message = ({header, variant, children, size = "normal"}) => {

    return (
        <Container>
            <Wrapper size={size}>
                <Header variant={variant}>{header}</Header>
                {children}
            </Wrapper>
        </Container>
    )
}

export default Message;

const Container = styled.div`
    padding: 5.5vmax 4.75vw;
    @media (min-width: 576px) { padding: 40px 7vw; }
    @media (min-width: 768px) { padding: 40px 5.75vw; }
    @media (min-width: 1200px) { padding: 40px 4.75vw; }
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`

    box-sizing: border-box;
    max-width: ${p => p.size === "small" ? "750px" : "1200px" };
    display: flex;
    justify-items: center;
    flex-direction: column;
`