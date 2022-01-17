import Message from '../../components/Message'
import Paragraph from '../../components/Paragraph'
import Flex from "../../components/Flex";
import PhotoLink from "../../components/PhotoLink";
import SmallText from '../../components/SmallText'

import CervusElaphus from '../../photos/wildlife/cervus-elaphus-1.jpg'
import OvisOrientalis from '../../photos/wildlife/ovis-orientalis-1.jpg'
import Konik from '../../photos/wildlife/konik-2.jpg'

import PantheraLeo from '../../photos/wildlife/panthera-leo-1.jpg'
import Loxodonta from '../../photos/wildlife/loxodonta.jpg'
import CrocutaCrocuta from '../../photos/wildlife/crocuta-crocuta-1.jpg'

import { setMetaInformation } from '../../methods/meta'

const Birds = () => {
    setMetaInformation("Wildlife Photography", "The fascinating life of animals", null, "/wildlife");
    window.scrollTo(0, 0);
    return (
        <>
            <Message variant="large" header="Wildlife">
                <Paragraph>
                    It is not until man get's silent nature can be really enjoyed. When we hide and try to be absent, nature will present fascinating life.
                    Form small mammals to the large elephant, they have there own place, there own beauty and there own greatness.
                </Paragraph>
                <Paragraph>
                    <b>P.S.</b> Unless indicated otherwise.. of course all photo are taken in nature...
                </Paragraph>
            </Message>
            <Flex columns={3}>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Ovis Orientalis"
                        subTitle="(European mouflon)"
                        to="/wildlife/ovis-orientalis"
                        img={OvisOrientalis}
                        focal={{left : "0%"}}
                    />
                </div>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Cervus Elaphus"
                        subTitle="(Red deer)"
                        to="/wildlife/cervus-elaphus"
                        img={CervusElaphus}
                    />
                </div>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Equus Caballus Konik"
                        subTitle="(Konik)"
                        to="/wildlife/konik"
                        img={Konik}
                    />
                </div>
            </Flex>
            <SmallText variant="small" header="Africa">
                <Paragraph>
                    Yes, Europa has a fine selection of wild life to enjoy. But really, Africa is beyond compare.
                    So when the moment the opportunity came, the first thing that I did after buying the ticket, was another sd-card for the camera.
                </Paragraph>
            </SmallText>
            <Flex columns={3}>
                <div>
                    <PhotoLink
                        title="Crocuta crocuta"
                        subTitle="(Spotted Hyaena)"
                        to="/wildlife/crocuta-crocuta"
                        img={CrocutaCrocuta}
                    />
                </div>
                <div>
                    <PhotoLink
                        title="Panthera Leo"
                        subTitle="(Lion)"
                        to="/wildlife/panthera-leo"
                        img={PantheraLeo}
                    />
                </div>
                <div>
                    <PhotoLink
                        title="Loxodonta"
                        subTitle="(African elephant)"
                        to="/wildlife/loxodonta"
                        img={Loxodonta}
                    />
                </div>
            </Flex>
        </>
    )
}



export default Birds;