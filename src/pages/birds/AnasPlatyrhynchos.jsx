import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/anas-platyrhynchos.jpg'
import ImageTwo from '../../photos/birds/anas-platyrhynchos-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const AnasPlatyrhynchos = () => {
    setMetaInformation("Anas Platyrhynchos", "Mallard during Golden Hour", ImageOne, "/birds/anas-platyrhynchos");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Anas Platyrhynchos" subTitle="Mallard">
                <Paragraph>
                    They are spread over the whole northern hemisphere and have been an inspiration for cartoons and comics.
                    They may be common, even ordinary, but being so playful, making pictures of mallards is still much fun!
                </Paragraph>
            </Story>
            <FullWidthImage img={ImageTwo} />
        </>
    )
}

export default AnasPlatyrhynchos;