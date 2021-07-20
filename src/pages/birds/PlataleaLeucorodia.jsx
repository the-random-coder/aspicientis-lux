import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/platalea-leucorodia.jpg'
import ImageTwo from '../../photos/birds/platalea-leucorodia-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Platalea Leucorodia", "Majestic Spoonbills", ImageOne, "/birds/podiceps-cristatus");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Platalea Leucorodia" subTitle="Eurasian Spoonbill">
                <Paragraph>
                    The spoonbill is one of those birds you will never forget once you encountered them.
                    Sieving elegantly through the water, feeding on insects, frogs and even small fish it is simply breathtaking to observe them.
                    However, it is not until the bird decides to stretch its wings and takes off, it will show you its true majestic appearance.
                </Paragraph>
            </Story>
            <FullWidthImage offset="5%" variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default PlataleaLeucorodia;