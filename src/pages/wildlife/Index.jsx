import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const WildLife = lazy(() => import('./WildLife'));
const CervusElaphus = lazy(() => import('./CervusElaphus'));
const Konik = lazy(() => import('./Konik'));
const OvisOrientalis = lazy(() => import('./OvisOrientalis'));
const PantheraLeo = lazy(() => import('./PantheraLeo'));
const CrocutaCrocuta = lazy(() => import('./CrocutaCrocuta'));

const Index = () => {
    return (
        <Switch>
            <Route path="/wildlife/cervus-elaphus" component={CervusElaphus} />
            <Route path="/wildlife/konik" component={Konik} />
            <Route path="/wildlife/ovis-orientalis" component={OvisOrientalis} />
            <Route path="/wildlife/panthera-leo" component={PantheraLeo} />
            <Route path="/wildlife/crocuta-crocuta" component={CrocutaCrocuta} />
            <Route path="/wildlife" component={WildLife} />
        </Switch>
    )
}

export default Index;