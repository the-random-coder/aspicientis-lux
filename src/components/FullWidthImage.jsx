import styled from "styled-components";

const FullWidthImage = ({img, alt, offset, variant}) => {
    const height = getHeight(variant);

    if(!offset) offset ="center";

    return (
        <Container img={img} offset={offset} height={height} />
    )
}

const getHeight = (variant) => {
    switch(variant) {
        case "cinematic": return "56.25vw";
        default : return "66.66vw";
    }
}

const Container = styled.div`
    width: 100vw;
    height: ${p => p.height};
    display: flex;
    overflow: hidden;
    background-image: url(${p => p.img});
    background-size: cover;
    background-position: center ${p => p.offset};
`

export default FullWidthImage