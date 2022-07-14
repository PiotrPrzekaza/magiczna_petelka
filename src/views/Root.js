import { Provider } from 'react-redux';
import { store } from 'store/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BasicTemplate from 'templates/BasicTemplate';
import { Home } from './Home';
import { Contact } from './Contact';
import Bags from './Bags';
import { About } from './About';
import { Category } from './Category';
import Shawl from './Shawl';
import Clothes from './Clothes';
import Blanket from './Blanket';
import Mascots from './Mascots';
import { routes } from '../routes';

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <BasicTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.contact} component={Contact} />
          <Route exact path={routes.category} component={Category} />
          <Route path={routes.about} component={About} />
          <Route path={routes.torebki} component={Bags} />
          <Route path={routes.chusty} component={Shawl} />
          <Route path={routes.ubrania} component={Clothes} />
          <Route path={routes.kocyki} component={Blanket} />
          <Route path={routes.pluszaki} component={Mascots} />
        </Switch>
      </BasicTemplate>
    </BrowserRouter>
  </Provider>
);
