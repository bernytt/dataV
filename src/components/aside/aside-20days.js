import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
          <aside className="app-sidebar">
              <nav>
                  <Link to="/v3/day"  activeClassName="active">说明</Link>
                  <Link to="/v3/day1"  activeClassName="active">V3 Day 1</Link>
                  <Link to="/v4/day1"  activeClassName="active">V4 Day 1</Link>
              </nav>
          </aside>
        )
    }
}

export default Aside;
