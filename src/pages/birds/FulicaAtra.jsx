import FullWidthImage from "../../components/FullWidthImage"
import Story from "../../components/Story"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/fulica-atra.jpg'

const FulicaAtra = () => {
    return (
        <>
            <FullWidthImage variant="cinematic" img={ImageOne} />
            <Story title="Fulica Atra" subTitle="Eurasian Coot">
                <Paragraph>
                    Don't let the size of this small water bird fool you, they are ferocious little creatures!
                    They are fast, sometimes even aggressive and afraid of nothing!
                    In the past I was working in an office with a pond in front of it.
                    Always when the swans arrived all the other birds went away or hid themselves, but not this little guy, while the swans are 20 times bigger then them, they still tried to scare them away!
                </Paragraph>
            </Story>
        </>
    )
}

export default FulicaAtra;