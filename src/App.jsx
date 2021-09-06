import { Container } from "react-bootstrap";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import "./App.css";
function App() {
  return <div>
    <Router>
      <Switch>
        <Route path="/">
          <Container>
            <h1 className="text-danger">Hello <BsFillBootstrapFill className="text-primary" /></h1>
          </Container>
        </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
