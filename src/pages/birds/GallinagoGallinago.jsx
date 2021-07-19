import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/gallinago-gallinago.jpg'

const GallinagoGallinago = () => {
    return (
        <>
            <FullWidthImage variant="cinematic" offset="85%" img={ImageOne} />
            <Story title="Gallinago Gallinago" subTitle="Common Snipe">
                <Paragraph>
                    Unfortunately, the Common Snipe, is not so common in the country where I live.
                    They are on the Dutch red list of threatened spices. Let's hope nature preservation will ensure their habitats remain.
                    The bird is very well camouflaged and when hiding in the reeds it is hard to spot.
                    But when seeking food in shallows water you can enjoy the beauty of this lovely bird.
                </Paragraph>
            </Story>
        </>
    )
}

export default GallinagoGallinago;