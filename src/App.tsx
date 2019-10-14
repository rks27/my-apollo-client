import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Post from "./components/Post";
import Posts from "./components/Posts";
import TogglePortal from "./components/TogglePortal";
import NewPost from "./components/NewPost";

const client = new ApolloClient({
  uri: "https://api-uswest.graphcms.com/v1/ck1jzecws1jme01e9fjvi3cun/master"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>Graph QL using Query</div>
        <div>
          <Link to="/post/new">New post</Link> <br />
          <Link to="/">Home</Link>
          <br></br>
          <br />
        </div>
        <Switch>
          <Route path="/post/new" component={NewPost} />
          <Route path="/post/:id" component={Post} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Posts} />
          <Route path="/Toggle" component={TogglePortal} />
        </Switch>

        <div>
          <br />
          <br />
          ------------------------------- This is main footer-----------
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
