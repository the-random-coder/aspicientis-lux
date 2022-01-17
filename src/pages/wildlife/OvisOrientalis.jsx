import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/wildlife/ovis-orientalis-1.jpg'
import ImageTwo from '../../photos/wildlife/ovis-orientalis-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Ovis Orientalis", "A wild sheep", ImageOne, "/wildlife/ovis-orientalis");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Ovis Orientalis" subTitle="European mouflon">
                <Paragraph>
                    The European mouflon was originally found only on the Mediterranean islands of Corsica and Sardinia,
                    but has since been introduced into many other regions of Europe.
                    They are ancestral to modern domestic sheep, but still display their undomesticated behavior and can be quite shy.
                    In the recent years, a new treat for these sheep is looming: the wolf is back, making it even harder to spot them.
                </Paragraph>
            </Story>
            <FullWidthImage variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default PlataleaLeucorodia;