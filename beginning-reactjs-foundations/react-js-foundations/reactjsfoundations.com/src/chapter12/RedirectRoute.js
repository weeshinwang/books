import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Header(props) {
  return <Link to="/users">View a list of users</Link>;
}

function UsersList(props) {
  const location = useLocation();
  return (
    <>
      <h1>User List</h1>
      path: {location.pathname}
      <SyntaxHighlighter language="javascript" style={github}>
        {`import { BrowserRouter as Router, Redirect, Route, Switch, Link, useLocation } from "react-router-dom";

function Header(props){
    return(<Link to="/users">View a list of users</Link>);
}

function UsersList(props){
    const location = useLocation();
    return(
      <>
        <h1>User List</h1>
        path: {location.pathname}
      </>);
}

function NoMatch(props){
    const location = useLocation();
    return(<h1>{location.pathname} is not a matching path</h1>)
}

function App(props){

    return(
        <Router>
            <Header />
            <Switch>

            <Route path="/users/list">
              <UsersList />
            </Route>

            <Redirect from="/users" to="/users/list" />

            <Route>
              <NoMatch />
            </Route>
        </Switch>
      </Router>
    );
}

export default App;`}
      </SyntaxHighlighter>
    </>
  );
}

function NoMatch(props) {
  const location = useLocation();
  return <h1>{location.pathname} is not a matching path</h1>;
}

function App(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users/list">
          <UsersList />
        </Route>

        <Redirect from="/users" to="/users/list" />

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
