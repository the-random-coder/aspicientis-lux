import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/anser-anser.jpg'

const AnserAnser = () => {
    return (
        <>
            <FullWidthImage variant="cinematic" offset="bottom -100px" img={ImageOne} />
            <Story title="Anser Anser" subTitle="Greylag Goose">
                <Paragraph>
                    Noisy Troublemakers. That is a true description for the greylag goose.
                    Especially when Canada Geese <i>(Branta Canadensis)</i> or Egyptian Geese <i>(Alopochen Aegyptiaca)</i> are in the same area there will be a lot of fighting between them.
                    Sometimes they even 'flood' a certain area causing a lot of damage to nature.
                </Paragraph>
                <Paragraph>
                    It is not the most beautiful bird to watch, and often when looking for birds, you ignore the geese. But for honing your skill of shooting birds in flight, it is perfect practice material.
                </Paragraph>
            </Story>
        </>
    )
}

export default AnserAnser;