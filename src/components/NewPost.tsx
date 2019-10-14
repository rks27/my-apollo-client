import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

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
  state: any = {
    title: "",
    body: ""
  };

  handleOnChange = (e: any) => {
    const formData: any = {};
    formData[e.target.name] = e.target.value;
    console.log("setDate");
    this.setState({ ...formData });
  };

  render() {
    const { title, body } = this.state;
    return (
      <Mutation mutation={MUTATION_QUERY} variables={{ title, body }}>
        {(createPost: any) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              createPost()
                .then(() => this.setState({ body: "", title: "" }))
                .catch((e: any) => console.log(e));
            }}
          >
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={this.handleOnChange}
              value={title}
            />
            <br></br>
            <textarea
              placeholder="body"
              name="body"
              onChange={this.handleOnChange}
              value={body}
            />
            <br></br>
            <button>Submit</button>
          </form>
        )}
      </Mutation>
    );
  }
}
