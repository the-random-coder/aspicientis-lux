import PhotoLink from "../components/PhotoLink";
import Message from "../components/Message";
import Paragraph from "../components/Paragraph";
import Flex from "../components/Flex";

import BirdImage from '../photos/birds/platalea-leucorodia.jpg'
import LandscapeImage from '../photos/landscapes/full-size/ireland-1.jpg'
import WildlifeImage from '../photos/wildlife/cervus-elaphus-2.jpg'

import { setMetaInformation } from '../methods/meta'

const Home = () => {
    window.scrollTo(0, 0);
    setMetaInformation("Nature Photography", "An endeavor in capturing the beauty of nature", "https://aspicientis-lux.nl/thumbnail.jpg", "");
    return (
        <>
            <Message header="An endeavor into photography..." variant ="small">
                <Paragraph>
                    When I picked up a camera for the first time, I found it a bit dull, looking through a small eye piece, pushing a button and after some time picking up unsharp, meaningless pictures.
                    But sometime later I saw a good friend playing with his camera, explaining me it was not about the camera, but about experiencing the world. It took me years to understand what he meant.
                    Being a computer scientist and an engineer in profession I tend to focus on technology all the time. Yes, photography can be technical from time to time, but it is so much more.
                    It is about capturing that overwhelming feeling when standing on mountain overlooking some incredible scene or trying to communicate the stunning beauty of a bird looking straight into my lens.
                    So, an image doesn't always have to be technical perfect. thus, what you find on these pages is a bit of my endeavors in photography and the world.
                </Paragraph>
            </Message>
            <Flex columns={3}>
                <div>
                    <PhotoLink
                        title="Birds"
                        subTitle="Magic and Majesty"
                        to="/birds"
                        img={BirdImage}
                    />
                </div>

                <div>
                    <PhotoLink
                        title="Wildlife"
                        subTitle="The fascinating life of animals"
                        to="/wildlife"
                        img={WildlifeImage}
                    />
                </div>

                <div>
                    <PhotoLink
                        title="Landscapes"
                        subTitle="Incredible scenery"
                        to="/landscapes"
                        img={LandscapeImage}
                    />
                </div>
            </Flex>
        </>
    )
}

export default Home;