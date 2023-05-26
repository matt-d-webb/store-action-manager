import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./Header";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          {routes.map((route, index) => (
            <AppRoutes
              key={route.path + index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const AppRoutes = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
};
