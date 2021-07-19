import styled from "styled-components";
import Header from './Header'

const SmallText = ({header, variant, children}) => {

    return (
        <Container>
            <Inner>
                <Header justify="left" variant={variant}>{header}</Header>
                {children}
            </Inner>
        </Container>
    )
}

export default SmallText;

const Inner = styled.div`
    padding: 20px 0;
    @media (min-width: 992px) {
        flex: 0 0 640px;
        max-width: 640px;
    }

    @media (min-width: 1200px) {
        flex: 0 0 540px;
        max-width: 540px;
    }
`

const Container = styled.div`
    padding: 5.5vmax 4.75vw;
    display: flex;
    @media (min-width: 576px) { padding: 40px 7vw; }
    @media (min-width: 768px) { padding: 40px 5.75vw; }
    @media (min-width: 1200px) { padding: 40px 4.75vw; }
    justify-content: center;
`