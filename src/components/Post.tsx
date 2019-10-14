import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const POST_QUERY = gql`
  query post($id: ID) {
    post(where: { id: $id }) {
      id
      title
      body
      createdAt
    }
  }
`;

export default class Post extends Component<any> {
  render() {
    const { match } = this.props;
    return (
      <Query<any, any>
        query={POST_QUERY}
        variables={{
          id: match.params.id
        }}
      >
        {({ loading, error, data }: any) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error post:( {error}</p>;
          const { post } = data;
          return (
            <div>
              <h1>{post.title}</h1> <p>{post.body}</p>
            </div>
          );
        }}
      </Query>
    );
  }
}
