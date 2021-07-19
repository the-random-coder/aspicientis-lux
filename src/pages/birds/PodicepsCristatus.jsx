import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/podiceps-cristatus.jpg'
import ImageTwo from '../../photos/birds/podiceps-cristatus-2.jpg'

const PodicepsCristatus = () => {
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Podiceps Cristatus" subTitle="Great Crested Grebe">
                <Paragraph>
                    I was passing the pond where a couple of grebes built their nest on regular base, since it was not far from my home.
                    At the side of a highway entrance they had found a cozy spot hidden from the staring eyes of the general public.
                    Once I saw that she laid her eggs, it was just a matter of time.
                    So, after four weeks, I had the pleasure of observing how the chicks are having fun, riding along the parents back. Sometimes just one, sometimes all fives of them.
                </Paragraph>
                <Paragraph>
                    But not only when they have chicks, the beautiful grebes are always nice to see.
                    And often when there is competition from other birds, they tend to get closer just to grab some of your attention.
                </Paragraph>
            </Story>
            <FullWidthImage variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default PodicepsCristatus;