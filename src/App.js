import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Login from './pages/Login';
import Info from './pages/Info';

const App = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const history = useHistory();
  console.log('🚀 ~ file: App.js ~ line 19 ~ App ~ history', history);

  useEffect(() => {
    if (isLoggedIn) history.push('/info');
  }, [isLoggedIn]);

  return (
    <Container maxWidth='lg' sx={{ mt: 10 }}>
      {/* <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
            </ul>
          </nav> */}

      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/info'>
          <Info />
        </Route>
      </Switch>
      {/* </div> */}
    </Container>
  );
};

export default App;
