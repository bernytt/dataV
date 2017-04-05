import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';

import Main from './components/Main';
import Aside from './components/aside';

import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';


const App = ({ children }) => (
  <div className="app-wrap">
      <Aside />
      <div className="app-content">
          {children}
      </div>
  </div>
);


export default () => (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Main}/>
          <Route path="item1" component={Item1} />
          <Route path="item2" component={Item2} />
          <Route path="item3" component={Item3} />
          <Route path="item4" component={Item4} />
          <Route path="item5" component={Item5} />
      </Route>
  </Router>
);