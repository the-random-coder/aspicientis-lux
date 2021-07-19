import styled from "styled-components";

const Header = ({variant, children, justify = 'center'}) => {

    const font = getFont(variant);
    return (
        <Styled justify={justify} font={font}>{children}</Styled>
    )
}

export default Header;

const getFont = (variant) => {
    switch(variant) {
        case "large" : return { style : "normal", size :  "min(2.5rem, 1rem + 1.67vh);"  };
        case "italic" : return { style : "italic", size :  "min(2.5rem, 1rem + 1.67vh);"  };
        default : return { style : "normal", size :  "min(2.125rem, 1rem + 1.25vh)"  };
    }
}

const Styled = styled.h1`
    font-family: 'Forum';
    font-weight: 400;
    line-height: 1.4em;
    font-size: ${p => p.font.size};
    font-style: ${p => p.font.style};
    display: flex;
    flex-direction: column;
    justify-content: ${p => p.justify};
    text-align: ${p => p.justify};
`