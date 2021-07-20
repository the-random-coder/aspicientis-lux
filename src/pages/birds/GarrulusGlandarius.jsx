import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/garrulus-glandarius.jpg'

import { setMetaInformation } from '../../methods/meta'

const TurdusPhilomelos = () => {
    setMetaInformation("Garrulus Glandarius", "The intelligence of Jays", ImageOne, "/birds/garrulus-glandarius");
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Garrulus Glandarius" subTitle="Eurasian Jay">
                <Paragraph>
                    One of the Dutch nicknames for this bird is the "Shouting Magpie". And that is what they do!
                    Their song is incredible distinct. Being part of the <i>Corvidae</i> (Crows) family they are very intelligent and are known for planning ahead their food reserves.
                    Research has shown that their brain to body ratio is one of highest of all animals!
                    For the Dutchies wondering about the washed-out colors, the <i>Garrulus Glandarius</i> species has several subspecies, this being a <i>Garrulus Glandarius Atricapillus</i>.
                </Paragraph>
            </Story>
        </>
    )
}

export default TurdusPhilomelos;