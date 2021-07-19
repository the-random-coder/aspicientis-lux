import styled from 'styled-components'

import Message from "./Message";

const Story = ({title, subTitle, children}) => {
    return (
        <Message header={title} variant="italic">
            <SubTitle>{subTitle}</SubTitle>
            {children}
        </Message>
    )
}

export default Story;

const SubTitle = styled.h2`
    font-family: 'Forum';
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.4em;
    font-size: min(1.125rem, 1rem + 0.14vh);
    letter-spacing: 0.17em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

