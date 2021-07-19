import styled from 'styled-components'

const StoryContinuation = ({title, children}) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

export default StoryContinuation;

const Container = styled.div`
    padding: 5.5vmax 4.75vw;
    @media (min-width: 576px) { padding: 40px 7vw; }
    @media (min-width: 768px) { padding: 40px 5.75vw; }
    @media (min-width: 1200px) { padding: 40px 4.75vw; }
    box-sizing: border-box;
`

const Title = styled.h2`
    font-family: 'Forum';
    font-weight: 400;
    line-height: 1.45em;
    font-size: min(2.125rem, 1rem + 1.25vh);
`