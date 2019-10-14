import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PostForm from "./PostForm";

const MUTATION_QUERY = gql`
  mutation updatePost($title: String!, $body: String!, $id: ID) {
    updatePost(
      where: { id: $id }
      data: { status: PUBLISHED, title: $title, body: $body }
    ) {
      title
      body
      id
    }
  }
`;

export default class UpdatePost extends Component<any> {
  render() {
    const { post } = this.props;
    return (
      <Mutation mutation={MUTATION_QUERY}>
        {(updatePost: any) => (
          <PostForm mutationPromise={updatePost} post={post}></PostForm>
        )}
      </Mutation>
    );
  }
}
