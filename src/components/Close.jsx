import styled from "styled-components";

const Close = styled.div`
    position: absolute;
    right: 7vw;
    top: 32px;
    width: 22px;
    height: 22px;
    cursor: pointer;

    @media (min-width: 768px) {
        top: 42px;
        right: 5.75vw;
    }

    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 22px;
        width: 1px;
        background-color: #2d2d2d;
    }

    &:before { transform: rotate(45deg); }
    &:after { transform: rotate(-45deg); }
`

export default Close;