import styled from "styled-components";
import { Link } from 'react-router-dom'

const PhotoLink = (props) => {

    const { img, to, title, subTitle, variant, focal } = props;
    const position = getPosition(focal);
    const ratio = getAspectRatio(variant);

    return (
        <Link to={to}>
            <Container ratio={ratio}>
                <Overlay />
                <Image position={position} img={img} />
                <TitleBox>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleBox>
            </Container>
        </Link>
    )
}

const getAspectRatio = (variant) => {
    switch(variant) {
        case "cinematic": return "43.75%";
        case "portrait": return "125%";
        default : return "84%";
    }
}

const TitleBox = styled.div`
    position: absolute;
    bottom: 4vw;
    z-index:4;
    pointer-events: none;
`

const Title = styled.h2`
    font-family: 'Forum';
    font-weight: 400;
    font-style: normal;
    line-height: 1.4em;
    font-size: min(2.125rem, 1rem + 1.25vh);
    color:white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin:0;
`

const SubTitle = styled.h3`
    font-family: 'Forum';
    font-weight: 400;
    font-style: normal;
    line-height: 1.43em;
    letter-spacing: 0.29em;
    font-size: min(0.875rem, 1rem + -0.14vh);
    color:white;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    margin: .75vw 0 0 0;
`

const getPosition = (focal) => {
    if(!focal) return "center center";
    if(!focal.left) return `center ${focal.top}`;
    if(!focal.top) return `${focal.left} center`;
    return `${focal.left} ${focal.top}`;
}

export default PhotoLink;

const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: ${p => p.ratio};
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: stretch;
`

const Image = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;

    background-image: url(${p => p.img});
    background-size: cover;

    background-position: ${p => p.position};
    transition : transform 1s linear;
    &:hover { transform: scale(1.05); }
    z-index:2;
`

const Overlay = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
    z-index:3;
    background: linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.1) 60%,rgba(0,0,0,.2));
    pointer-events: none;
`