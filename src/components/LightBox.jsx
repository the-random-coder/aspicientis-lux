import styled from 'styled-components'
import Portal from './Portal'
import Close from './Close'
import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'
import { useState } from 'react'

const LightBox = ({index, images, onClose }) => {

    const [ imageIndex, setImageIndex ] = useState(index);

    const nextImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
    }

    const prevImage = () => {
        if(imageIndex === 0) setImageIndex(images.length -1);
        else setImageIndex(imageIndex - 1);
    }

    return (
        <Portal>
            <CloseButton onClick={onClose} />
            <ArrowLeftButton onClick={prevImage}>
                <ArrowLeft />
            </ArrowLeftButton>
            <Cover>
                <Container>
                    {images.map((img,index) => <Image key={img} alt={img} style={{opacity : index === imageIndex ? 1 : 0}} src={img} /> ) }
                </Container>
            </Cover>
            <ArrowRightButton onClick={nextImage}>
                <ArrowRight />
            </ArrowRightButton>
        </Portal>
    )
}

const Cover = styled.div`
    position: absolute;
    z-index:1;
    width: 100vw;
    height:100vh;
`

const ArrowButton = styled.div`
    position: absolute;
    z-index: 10;
    top:50%;
    height: 22px;
    width: 22px;
    margin-top: 11px;
    color: black;
    display: none;
    cursor: pointer;

    @media (min-width: 768px) { display: block; }
`

const ArrowLeftButton = styled(ArrowButton)`

    @media (min-width: 768px) {
        left: calc((5.75vw / 2) - 11px);
    }

    @media (min-width: 992px) {
        left: calc((4.75vw / 2) - 11px);
    }
`

const ArrowRightButton = styled(ArrowButton)`

    @media (min-width: 768px) {
        right: calc((5.75vw / 2) - 11px);
    }

    @media (min-width: 992px) {
        right: calc((4.75vw / 2) - 11px);
    }
`

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`
const CloseButton = styled(Close)`

    top:32px;
    right:32px;
    z-index: 10;

    @media (min-width: 768px) {
        top:22px;
        right: calc((5.75vw / 2) - 11px);
    }

    @media (min-width: 992px) {
        right: calc((4.75vw / 2) - 11px);
    }
`

const Image = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url('${p => p.src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transition : opacity 0.75s ease-in-out;
    opacity:0;

    @media (min-width: 768px) {
        left: 5.75vw;
        width: calc(100% - 11.5vw);
    }

    @media (min-width: 992px) {
        top: 80px;
        left: 4.75vw;
        width: calc(100% - 9.5vw);
        height: calc(100% - 160px);
    }

    @media (min-width: 1200px) {
        left: 4.75vw;
        width: calc(100% - 9.5vw);
    }
`

export default LightBox