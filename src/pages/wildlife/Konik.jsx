import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/wildlife/konik-1.jpg'
import ImageTwo from '../../photos/wildlife/konik-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Konik", "Little Horse", ImageOne, "/wildlife/konik");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Equus Caballus" subTitle="Konik">
                <Paragraph>
                    This is semi-wild horse can be found in several nature reserve parks in the Netherlands.
                    It's origin can be traced to Poland, where it also got it's name, literal, 'small horse'.

                    They are helping to maintain an eco-system balances because they eat on the same place repeatedly and thus keeping plains open from too much bushes and trees.
                </Paragraph>
            </Story>
            <FullWidthImage variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default PlataleaLeucorodia;