import styled from "styled-components";

const Flex = styled.div`
    width : 100vw;
    display: flex;
    flex-wrap: wrap;

    div {
        flex: 0 0 100vw;
        @media (min-width: 768px) {
            flex: 0 0 ${$p => 100 / $p.columns}vw;
        }
    }
`

export default Flex;