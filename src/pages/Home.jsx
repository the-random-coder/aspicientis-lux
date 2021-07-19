import PhotoLink from "../components/PhotoLink";
import Message from "../components/Message";
import Paragraph from "../components/Paragraph";
import Flex from "../components/Flex";

const Home = () => {
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
            <Flex columns={2}>
                <div>
                    <PhotoLink
                        title="Birds"
                        subTitle="Magic and Majesty"
                        to="/birds"
                        img="https://images-pw.pixieset.com/elementfield/22902569/DSC_6302-2d8de341.jpg"
                    />
                </div>
                <div>
                    <PhotoLink
                        title="Landscapes"
                        subTitle="Incredible scenery"
                        to="/landscapes"
                        img="https://images-pw.pixieset.com/elementfield/72902569/DSC_8868-6aab1656.jpg"
                    />
                </div>
            </Flex>
        </>
    )
}

export default Home;