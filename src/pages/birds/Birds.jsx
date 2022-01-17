import Message from '../../components/Message'
import Paragraph from '../../components/Paragraph'
import Flex from "../../components/Flex";
import PhotoLink from "../../components/PhotoLink";
import SmallText from '../../components/SmallText'

import PlataleaLeucorodia from '../../photos/birds/platalea-leucorodia.jpg'
import AnasPlatyrhynchos from '../../photos/birds/anas-platyrhynchos.jpg'
import PodicepsCristatus from '../../photos/birds/podiceps-cristatus.jpg'

import FulicaAtra from '../../photos/birds/fulica-atra.jpg'
import CygnusOlor from '../../photos/birds/cygnus-olor.jpg'
import GallinagoGallinago from '../../photos/birds/gallinago-gallinago.jpg'

import ParusMajor from '../../photos/birds/parus-major.jpg'
import ErithacusRubecula from '../../photos/birds/erithacus-rubecula.jpg'

import TurdusPhilomelos from '../../photos/birds/turdus-philomelos.jpg'
import GarrulusGlandarius from '../../photos/birds/garrulus-glandarius.jpg'
import CyanistesCaeruleus from '../../photos/birds/cyanistes-caeruleus.jpg'

import AnserAnser from '../../photos/birds/anser-anser.jpg'

import ColumbaLiviaDomestica from '../../photos/birds/columba-livia-domestica.jpg'

import { setMetaInformation } from '../../methods/meta'

const Birds = () => {
    setMetaInformation("Bird Photography", "The beautiful world of birds", PlataleaLeucorodia, "/birds");
    window.scrollTo(0, 0);
    return (
        <>
            <Message variant="large" header="Birds">
                <Paragraph>
                    Birds have always fascinated mankind. The Dream of Flight, is an inspiration for imagination, for technology, and even for music and choral composers.
                    The freedom birds possess to go where ever they like, the songs some them can sing, or each 'laugh' at you, and all the different spices, makes that there is always something happing when you observe them.
                </Paragraph>
            </Message>
            <Flex columns={3}>
                <div>
                    <PhotoLink
                        focal={{left : "35%"}}
                        variant="portrait"
                        title="Platalea Leucorodia"
                        subTitle="(Eurasian Spoonbill)"
                        to="/birds/platalea-leucorodia"
                        img={PlataleaLeucorodia}
                    />
                </div>
                <div>
                    <PhotoLink
                        focal={{left : "49%"}}
                        variant="portrait"
                        title="Anas Platyrhynchos"
                        subTitle="(Mallard)"
                        to="/birds/anas-platyrhynchos"
                        img={AnasPlatyrhynchos}
                    />
                </div>
                <div>
                    <PhotoLink
                        focal={{left : "47.5%"}}
                        variant="portrait"
                        title="Podiceps Cristatus"
                        subTitle="(Great Crested Grebe)"
                        to="/birds/podiceps-Cristatus"
                        img={PodicepsCristatus}
                    />
                </div>
            </Flex>
            <SmallText variant="small" header="Water">
                <Paragraph>
                    Since I live in The Netherlands, water is everywhere, so water birds are everywhere. The reflective water in golden hour makes a perfect decor for beautiful photo's.
                </Paragraph>
            </SmallText>
            <Flex columns={3}>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Fulica Atra"
                        subTitle="(Eurasian Coot)"
                        to="/birds/fulica-atra"
                        img={FulicaAtra}
                    />
                </div>
                <div>
                    <PhotoLink
                        focal={{left : "65%"}}
                        variant="portrait"
                        title="Cygnus Olor"
                        subTitle="(Mute Swan)"
                        to="/birds/cygnus-olor"
                        img={CygnusOlor}
                    />
                </div>
                <div>
                    <PhotoLink
                        focal={{left : "65%"}}
                        variant="portrait"
                        title="Gallinago Gallinago"
                        subTitle="(Common Snipe)"
                        to="/birds/gallinago-gallinago"
                        img={GallinagoGallinago}
                    />
                </div>
            </Flex>
            <SmallText variant="small" header="Forest">
                <Paragraph>
                    You want to hear the true sound of nature? Just go in spring time to a stretch of forest without too much people around. From the muted tweets of tits to the long,
                    loud songs of the robins, you will find that a quiet walk wasn't so quiet after all.
                </Paragraph>
            </SmallText>
            <Flex columns={2}>
                <div>
                    <PhotoLink
                        title="Paurs Major"
                        subTitle="(Great Tit)"
                        to="/birds/parus-major"
                        img={ParusMajor}
                    />
                </div>
                <div>
                    <PhotoLink
                        title="Erithacus Rubecula"
                        subTitle="(European Robin)"
                        to="/birds/erithacus-rubecula"
                        img={ErithacusRubecula}
                    />
                </div>
            </Flex>
            <Flex columns={3}>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Turdus Philomelos"
                        subTitle="(Song Thrush)"
                        to="/birds/turdus-philomelos"
                        img={TurdusPhilomelos}
                    />
                </div>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Garrulus Glandarius"
                        subTitle="(Eurasian Jay)"
                        to="/birds/garrulus-glandarius"
                        img={GarrulusGlandarius}
                    />
                </div>
                <div>
                    <PhotoLink
                        variant="portrait"
                        title="Cyanistes Caeruleus"
                        subTitle="(Eurasian Blue Tit)"
                        to="/birds/cyanistes-caeruleus"
                        img={CyanistesCaeruleus}
                    />
                </div>
            </Flex>
            <SmallText variant="small" header="Technical">
                <Paragraph>
                Surprisingly, bird photography is one of the most technical challenging forms of photography.
                Birds are fast, move unpredictable and with uncontrollable light conditions, it is a constant battle to get sharp, low-noise but aesthetic pleasing pictures.
                And that takes time, and lots of photos that just don't make the cut.
                </Paragraph>
            </SmallText>
            <Flex columns={1}>
                <div>
                    <PhotoLink
                        focal={{top : "30%"}}
                        variant="cinematic"
                        title="Anser Anser"
                        subTitle="(Greylag Goose)"
                        to="/birds/anser-anser"
                        img={AnserAnser}
                    />
                </div>
            </Flex>
            <SmallText variant="small" header="City">
                <Paragraph>
                    You don't have to go far. Cities are filled with birds, sometimes they become even a plague. But if you pay some attention, there is a lot to see.
                </Paragraph>
            </SmallText>
            <Flex columns={1}>
                <div>
                    <PhotoLink
                        focal={{top : "30%"}}
                        variant="cinematic"
                        title="Columba Livia Domestica"
                        subTitle="(Feral Pigeon)"
                        to="/birds/columba-livia-domestica"
                        img={ColumbaLiviaDomestica}
                    />
                </div>
            </Flex>
        </>
    )
}

export default Birds;