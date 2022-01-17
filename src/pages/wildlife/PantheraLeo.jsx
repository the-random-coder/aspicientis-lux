import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/wildlife/panthera-leo-1.jpg'
import ImageTwo from '../../photos/wildlife/panthera-leo-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Panthera Leo", "The King", ImageOne, "/wildlife/panthera-leo");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Panthera Leo" subTitle="Lion">
                <Paragraph>
                    Obviously, these photos are taken in a zoo. However, not ever zoo will give you a clear line of sight without any fences in between.
                    But, with great light on a cold winter day, I couldn't let the opportunity pass, especially when he looked me right into my eyes, what a cat!
                </Paragraph>
            </Story>
            <FullWidthImage variant="cinematic" img={ImageTwo} />
        </>
    )
}

export default PlataleaLeucorodia;