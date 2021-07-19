import { useState } from "react";
import styled from "styled-components";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const Slider = ({images}) => {

    const [ selected, setSelected ] = useState(0);

    const nextImage = () => {
        setSelected((selected + 1) % images.length)
    }

    const prevImage = () => {
        if(selected === 0) setSelected(images.length - 1)
        else setSelected(selected - 1);
    }

    return (
        <>
            <Container>
                { images.map((image,index) => <div key={image.src} className="image" style={{opacity : index === selected ? 1 : 0, backgroundImage : `url('${image.src}')` }} />) }
                <ControlsContainer color={images[selected].color}>
                    <Controls>
                        <div onClick={prevImage}><ArrowLeft /></div>
                        <span>{selected + 1} / {images.length}</span>
                        <div onClick={nextImage}><ArrowRight /></div>
                    </Controls>
                </ControlsContainer>
            </Container>
            { images.map((image,index) => <Image key={image.src} src={image.src} />) }
        </>
    );
}


const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color : ${p => p.color};
    z-index:4;
    width: 100vw;
    position: absolute;
    bottom: 10px;
    transition : color 1s ease-in-out;

    @media (min-width: 768px) { bottom: 20px; }
    @media (min-width: 992px) { bottom: 34px; }
`

const Controls = styled.div`
    font-family: 'Forum';
    font-size: min(0.875rem, 1rem + -0.14vh);
    line-height: 1.43em;
    letter-spacing: 0.29em;
    text-transform: uppercase;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 18px;
        cursor: pointer;
    }

    div {
        margin-top: 5px;
    }

    span {
        padding: 0 20px;
    }
`


const Container = styled.div`
    width: 100vw;
    height: 56.25vw;
    position: relative;

    div.image {
        position: absolute;
        width: 100vw;
        height: 56.25vw;
        background-size: cover;
        transition : opacity 1s ease-in-out;
        z-index : 2
    }
`

const Image = styled.img`
    display: none;
`

export default Slider;