import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/turdus-philomelos.jpg'

import { setMetaInformation } from '../../methods/meta'

const TurdusPhilomelos = () => {
    setMetaInformation("Turdus Philomelos", "Unexpected meeting with a Song Thrush", ImageOne, "/birds/turdus-philomelos");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Turdus Philomelos" subTitle="Song Thrush">
                <Paragraph>
                    When doing bird and wild-life photography, there is this one rule: the action will happen when you store away your camera.
                    And there was no exception for this photo. After a long afternoon hiking (my camera and lens have a combined weight of over 3 kilo) we entered the parking lot to get into the car.
                    But giving itself away by its singing - they called are song thrushes for a reason - another picture was added to 'the catch of the day'.
                </Paragraph>
            </Story>
        </>
    )
}

export default TurdusPhilomelos;