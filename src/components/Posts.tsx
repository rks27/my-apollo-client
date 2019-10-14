import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

export default class Posts extends Component {
  render() {
    return (
      <ul>
        <Query<any, any> query={POSTS_QUERY}>
          {({ error, data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const { posts } = data;
            return posts.map((p: any) => {
              return (
                <Link key={p.id} to={`/post/${p.id}`}>
                  <li>{p.title}</li>
                </Link>
              );
            });
          }}
        </Query>
      </ul>
    );
  }
}
