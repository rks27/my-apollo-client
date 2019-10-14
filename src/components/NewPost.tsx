import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PostForm from "./PostForm";

const MUTATION_QUERY = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;

export default class NewPost extends Component {
  render() {
    return (
      <Mutation mutation={MUTATION_QUERY}>
        {(createPost: any) => (
          <PostForm mutationPromise={createPost}></PostForm>
        )}
      </Mutation>
    );
  }
}
