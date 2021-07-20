import { useState } from "react";
import styled from "styled-components";
import LightBox from './LightBox'

const PhotoGrid = ({images, fullWidth = { thumbs : [], full : []} }) => {



    const [ lightBoxIndex, setLightBoxIndex ] = useState(-1)
    const [ scrollPosition, setScrollPosition ] = useState(0)

    const onClick = (index) => {
        setScrollPosition(window.scrollY);
        setLightBoxIndex(index);
        document.getElementById('root').style.display = "none";
    }

    const onClose = () => {
        setLightBoxIndex(-1);
        document.getElementById('root').style.display = "block";
        window.scrollTo(0, scrollPosition);
    }

    return (
        <>
            {lightBoxIndex !== -1 && <LightBox onClose={onClose} index={lightBoxIndex} images={[...images.full, ...fullWidth.full]} /> }
            <Container>
            {images.thumbs.map((img,index) => <img onClick={() => onClick(index)} className={getClasses(images.thumbs.length,index)} key={img} src={img} />)}
            </Container>
            {fullWidth && fullWidth.thumbs.map((img,index) => <FullWidthImage onClick={() => onClick(images.thumbs.length + index)} key={img} src={img} />)}
        </>
    )
}

const getClasses = (count, index)  => {
    let classNames = [];
    if(count % 2 === 1 && index === count -1)  classNames.push("small-odd");
    if(count % 3 === 0) classNames.push("three-some");

    if(count <= 3) return classNames.join(' ');

    if( count % 3 === 1 && index > count - 5)  classNames.push("quarterly-quarterly");
    if( count % 3 === 2 && index > count - 3)  classNames.push("fifty-fifty");


    if( count % 4 === 3 && index > count - 4)  classNames.push("three-some");

    return classNames.join(' ');
}


const Container = styled.div`
    display: flex;
    width:100vw;
    flex-wrap: wrap;

    img {
        flex: 0 0 auto;
        width: 100vw;
        cursor: pointer;
    }

    @media (min-width: 992px) {
        img { width: 50vw; }
        img.small-odd { width: 100vw; }
        img.three-some  { width: 33.3333vw; }
    }

    @media (min-width: 1200px) {
        img, img.small-odd  { width: 33.3333vw; }
        img.quarterly-quarterly { width: 25vw; }
        img.fifty-fifty { width: 50vw; }
    }

    @media (min-width: 1800px) {
       img { width: 25vw; }
       img.three-some  { width: 33.3333vw; }
    }

`

const FullWidthImage = styled.img`
    width: 100vw;
    cursor: pointer;
`

export default PhotoGrid