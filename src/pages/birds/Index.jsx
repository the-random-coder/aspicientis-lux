import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Birds = lazy(() => import('./Birds'));
const PlataleaLeucorodia = lazy(() => import('./PlataleaLeucorodia'));
const AnasPlatyrhynchos = lazy(() => import('./AnasPlatyrhynchos'));
const PodicepsCristatus = lazy(() => import('./PodicepsCristatus'));
const FulicaAtra = lazy(() => import('./FulicaAtra'));
const CygnusOlor = lazy(() => import('./CygnusOlor'));
const GallinagoGallinago = lazy(() => import('./GallinagoGallinago'));
const ParusMajor = lazy(() => import('./ParusMajor'));
const AnserAnser = lazy(() => import('./AnserAnser'));
const ColumbaLiviaDomestica = lazy(() => import('./ColumbaLiviaDomestica'));
const TurdusPhilomelos = lazy(() => import('./TurdusPhilomelos'));
const GarrulusGlandarius = lazy(() => import('./GarrulusGlandarius'));
const CyanistesCaeruleus = lazy(() => import('./CyanistesCaeruleus'));
const ErithacusRubecula = lazy(() => import('./ErithacusRubecula'));


const Index = () => {
    return (
        <Switch>
            <Route path="/birds/erithacus-rubecula" component={ErithacusRubecula} />
            <Route path="/birds/platalea-leucorodia" component={PlataleaLeucorodia} />
            <Route path="/birds/anas-platyrhynchos" component={AnasPlatyrhynchos} />
            <Route path="/birds/podiceps-cristatus" component={PodicepsCristatus} />
            <Route path="/birds/fulica-atra" component={FulicaAtra} />
            <Route path="/birds/cygnus-olor" component={CygnusOlor} />
            <Route path="/birds/gallinago-gallinago" component={GallinagoGallinago} />
            <Route path="/birds/parus-major" component={ParusMajor} />
            <Route path="/birds/anser-anser" component={AnserAnser} />
            <Route path="/birds/columba-livia-domestica" component={ColumbaLiviaDomestica} />
            <Route path="/birds/turdus-philomelos" component={TurdusPhilomelos} />
            <Route path="/birds/garrulus-glandarius" component={GarrulusGlandarius} />
            <Route path="/birds/cyanistes-caeruleus" component={CyanistesCaeruleus} />
            <Route path="/birds" component={Birds} />
        </Switch>
    )
}

export default Index;