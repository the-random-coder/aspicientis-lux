import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/wildlife/loxodonta.jpg'

import { setMetaInformation } from '../../methods/meta'

const PlataleaLeucorodia = () => {
    setMetaInformation("Loxodonta", "The most impressive of them all", ImageOne, "/wildlife/loxodonta");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Loxodonta" subTitle="African Elephant">
                <Paragraph>
                    When driving on the african Savanna there is no way to miss the magnificent elephant if it it close to you.
                    The sound, the size it is simply that you can't overlook. Most of the time they are friendly and fun to watch.
                    This male taking his 'dust shower' was no exception!
                </Paragraph>
            </Story>
        </>
    )
}

export default PlataleaLeucorodia;

