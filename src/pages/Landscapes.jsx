import Paragraph from '../components/Paragraph';
import Story from '../components/Story';
import PhotoGrid from '../components/PhotoGrid';

import { setMetaInformation } from '../methods/meta'

import images from '../photos/landscapes/Images'

const Landscapes = () => {

    setMetaInformation("Landscape Photography", "Incredible scenery", "https://aspicientis-lux.nl/thumbnail.jpg", "");
    return (
        <>
            <Story title="Ireland" size="small">
                <Paragraph>
                    When it comes to landscapes, Ireland is the place to be. With hills, the ocean, beaches, curvy roads, it is everything you can dream for.
                    Ireland is just one of the most beautiful countries of the world, maybe the most beautiful one.
                    The only, only thing is: the weather. Rain, drizzle, and clouds.
                    There is always a threat lurking to ruin your picture.
                    As they say: climate is what you expect, weather is what you get.
                </Paragraph>
            </Story>
            <PhotoGrid images={images.ireland} />

            <Story title="The Alps" size="small">
                <Paragraph>
                    Ireland is facing some serious competition though. When it comes to high mountains or snow, the Alps will be on top.
                    It doesn't matter if you are in Swiss, France, Italy or Austria, the Alps are simple magnificent!
                </Paragraph>
            </Story>
            <PhotoGrid images={images.alps} />

            <Story title="Iceland" size="small">
                <Paragraph>
                    In the middle of the Atlantic, several hours by plane from mainland Europe, an incredible isle is located: Iceland.
                    This volcanic 'rock' features breathtaking scenery and traveling that brings you from one beautiful place to the next.
                    However, the roads are not for the faint of heart: a 4wd is more a necessity than a luxury since even parts of the major highway of the country are just gravel.
                </Paragraph>
            </Story>
            <PhotoGrid images={images.iceland} />

            <Story title="USA" size="small">
                <Paragraph>
                    Being a good European I have the tendency to take the 'Everything is great in the US of A' with a grain of salt.
                    But I have to admit: the natural scenery is incredible. Highway 1 or Coastal Highway is rightfully claimed to be one of the most scenic routes in the world.
                    And with the desert and Yosemite National Park 'just around the corner', it is definitely one of the places to return to for a next visit.
                </Paragraph>
            </Story>
            <PhotoGrid images={images.usa} />

            <Story title="Israel" size="small">
                <Paragraph>
                    If you look past the political and religious issues in Israel, you will find a country with an incredible natural beauty.
                    From the high mountains in the north, that are covered with snow in the winter, through the hill country all the way to the desert and the sea,
                    the variety in landscapes can't be greater in just one or two days of travel.
                </Paragraph>
                <Paragraph>
                    <i>Note to myself: The only things is.. next time I need to bring a much better camera.</i>
                </Paragraph>
            </Story>
            <PhotoGrid images={images.israel} fullWidth={images.israelPanorama} />

            <Story title="Home" size="small">
                <Paragraph>
                    Looking through my window, I dream of mountains, hills, cliffs, windy road, just to be cruelly deranged by the sheer flatness of home: Holland.
                    And in times when traveling is hard I can actually dream of the less-greener grass at the other side.
                    Still, we can enjoy some nice scenery, that is, from time to time.
                </Paragraph>
            </Story>
            <PhotoGrid images={images.holland} />
        </>
    )

}

export default Landscapes