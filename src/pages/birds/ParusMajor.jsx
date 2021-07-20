import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/parus-major.jpg'

import { setMetaInformation } from '../../methods/meta'

const ParusMajor = () => {
    setMetaInformation("Parus Major", "Great Tit in the tree", ImageOne, "/birds/parus-major");
    return (
        <>
            <FullWidthImage variant="cinematic" offset="65%" img={ImageOne} />
            <Story title="Parus Major" subTitle="Great Tit">
                <Paragraph>
                    When it comes to Great Tits, somehow I am not so 'lucky'.
                    They are one of the most common birds in The Netherland, but every time when I am carrying my camera, they are between the leaves or the light is not what it should be for a great picture.
                    So I was rather happy to see that I took at least one decent picture of a Great Tit during a nice hike in the south not so long ago.
                </Paragraph>
            </Story>
        </>
    )
}

export default ParusMajor;