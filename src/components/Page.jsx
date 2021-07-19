import { useState } from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import Overlay from './Overlay';

const Page = ({children}) => {

    const [ showOverlay, setShowOverlay ] = useState(false);

    if(showOverlay) return <Overlay setShowOverlay={setShowOverlay} />

    return (
        <>
            <Navigation setShowOverlay={setShowOverlay} />
            {children}
            <Footer/>
        </>
    )
}

export default Page;