import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tickets from "./pages/Tickets/Tickets";
import Agents from "./pages/Agents/Agents";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Content>
          <Switch>
            <Route path="/tickets/" component={Tickets} />
            <Route path="/agents/" component={Agents} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
const Content = styled.div`
  width: 95vw;
  height: 100vh;
`;
