import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/cygnus-olor.jpg'
import ImageTwo from '../../photos/birds/cygnus-olor-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const CygnusOlor = () => {
    setMetaInformation("Cygnus Olor", "Mute Swan in style", ImageOne, "/birds/cygnus-olor");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Cygnus Olor" subTitle="Mute Swan">
                <Paragraph>
                    The Swan is a kingly bird, claimed by royals.
                    Queen Elizabeth II does actually own all the swans in England.
                    And in the past, a law existed in The Netherlands stipulating that only at the king's table swan could be served.
                    It must have been the strength and size that made royals identify with them.
                    It is one heaviest flying bird in the world, in general weighing about 12 kilo's but some have been found weighing up to 20 kilo's!
                </Paragraph>
                <Paragraph>
                    Swans are incredible powerful and often rise up from the water to demonstrate their superiority.
                    Something that even the juveniles already practice!
                </Paragraph>
            </Story>
            <FullWidthImage variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default CygnusOlor;