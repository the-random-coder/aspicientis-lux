import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Slider from "../../components/Slider"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/erithacus-rubecula.jpg'
import ImageTwo from '../../photos/birds/erithacus-rubecula-2.jpg'
import ImageThree from '../../photos/birds/erithacus-rubecula-3.jpg'

const ErithacusRubecula = () => {

    const images = [
        { src : ImageTwo, color : 'white' },
        { src : ImageThree, color : 'black' },
    ]

    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Erithacus Rubecula" subTitle="European Robin">
                <Paragraph>
                    Having robins around never gets odd. Those flying balls of feathers are cute and marvelous singers filling the forest with life.
                    Some specimens are very brave and let you come close, or even pose for you, giving you all the time you need to snap a picture.
                </Paragraph>
            </Story>
            <Slider images={images} />
        </>
    )
}

export default ErithacusRubecula;