import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/wildlife/crocuta-crocuta-1.jpg'
import ImageTwo from '../../photos/wildlife/crocuta-crocuta-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Crocuta Crocuta", "A vital component of most African ecosystems", ImageOne, "/wildlife/crocuta-crocuta");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Crocuta Crocuta" subTitle="Spotted Hyaena">
                <Paragraph>
                    Hyaena are often regarded as silly scavenger and often depicted negatively. However, if you learn a bit more about then or come
                    a cross one, you will find a very successful hunter. It's bite force is greatly exceeding that of a Lion and Hyaena are capable of
                    crushing skulls!
                </Paragraph>
                <Paragraph>
                    The picture above was taken at a 20 meter distance in the wild. I was on a morning hike we an armed guard, when all of the sudden this
                    hyaena out the of the bushes. While maintaining a fixed eye on us, it passed us to disappear in bushes once again.
                </Paragraph>
            </Story>
            <FullWidthImage variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default PlataleaLeucorodia;

