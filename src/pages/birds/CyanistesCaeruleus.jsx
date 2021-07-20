import styled from "styled-components"

import Story from "../../components/Story"
import StoryContinuation from "../../components/StoryContinuation"
import Flex from "../../components/Flex"
import Paragraph from "../../components/Paragraph"

import ImageOne from '../../photos/birds/cyanistes-caeruleus.jpg'
import ImageTwo from '../../photos/birds/cyanistes-caeruleus-2.jpg'

import { setMetaInformation } from '../../methods/meta'

const CyanistesCaeruleus = () => {
    setMetaInformation("Cyanistes Caeruleus", "Acrobatic Blue Tit", ImageOne, "/birds/cyanistes-caeruleus");
    return (
        <>
            <Flex columns={2}>
                <div>
                    <Image src={ImageOne} />
                </div>
                <Center>
                    <Story title="Cyanistes Caeruleus" subTitle="Eurasian Blue Tit">
                        <Paragraph>
                            Blues Tits are incredibly fun to watch. First of all, they are cute.
                            Their blue crest, white head with dark eye stripe makes that you almost want to cuddle them.
                            Also they can pull of all kinds of acrobatic stunts, both in the air and in the tree branches
                        </Paragraph>
                    </Story>
                </Center>
            </Flex>
            <Flex columns={2}>
                <Center>
                    <StoryContinuation title="Seeds">
                        <Paragraph>
                            Though preferring to eat insects during the breeding season, they will not hesitate to use their beaks to also grab seeds or other plant material.
                        </Paragraph>
                        <Paragraph>
                            You will find them everywhere, in the forest, in parks and even in gardens, but there are fast and not as easy to catch in a picture as you may assume.
                        </Paragraph>
                    </StoryContinuation>
                </Center>
                <Image src={ImageTwo} />
            </Flex>
        </>
    )
}

const Image = styled.img`
    width:100vw;
    @media (min-width: 768px) { width:50vw; }
`

const Center = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`

export default CyanistesCaeruleus;