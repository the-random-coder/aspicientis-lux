import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/wildlife/cervus-elaphus-1.jpg'
import ImageTwo from '../../photos/wildlife/cervus-elaphus-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Cervus Elaphus", "A Nobel Deer", ImageOne, "/wildlife/cervus-elaphus");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Cervus Elaphus" subTitle="Red Deer">
                <Paragraph>
                    The red deer is one of the largest deer species and in can be found most parts of Europe.
                    They can be found in many habitats, though seem to prefer the edges of forrest. They may look very friendly,
                    but - especially in the mating season - they do defend themselves quite fearful with their antlers,
                    which sometimes even result in the death of a competitor!
                </Paragraph>
            </Story>
            <FullWidthImage img={ImageTwo} />
        </>
    )
}

export default PlataleaLeucorodia;