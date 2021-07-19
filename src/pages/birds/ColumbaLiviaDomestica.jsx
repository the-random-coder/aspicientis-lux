
import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/columba-livia-domestica.jpg'

const ColumbaLiviaDomestica = () => {
    return (
        <>
            <FullWidthImage img={ImageOne} />
            <Story title="Columba Livia Domestica" subTitle="Feral Pigeon">
                <Paragraph>
                    As with the greylag goose, the feral pigeon is a bird you tend to ignore.
                    But when I saw this bird looking so angry at me in Jerusalem, I couldn't resist to take a picture, cause a common buzzard <i>(Buteo Buteo)</i> just went out of sight.
                </Paragraph>
            </Story>
        </>
    )
}

export default ColumbaLiviaDomestica;