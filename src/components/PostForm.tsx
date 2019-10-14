import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export default class PostForm extends Component<any> {
  static propTypes = {
    mutationPromise: PropTypes.func.isRequired,
    post: PropTypes.object
  };
  state: any = {
    id: this.props.post ? this.props.post.id || "" : "",
    title: this.props.post ? this.props.post.title || "" : "",
    body: this.props.post ? this.props.post.body || "" : ""
  };

  handleOnChange = (e: any) => {
    const formData: any = {};
    formData[e.target.name] = e.target.value;
    console.log("setDate");
    this.setState({ ...formData });
  };

  render() {
    const { title, body, id } = this.state;
    const { mutationPromise, history } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          mutationPromise({
            variables: {
              title,
              body,
              id
            }
          })
            .then(() => {
              console.log("should redirect");
              return <Redirect to="/" />;
            })
            .catch((e: any) => console.log(e));
        }}
      >
        Title : <br></br>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={this.handleOnChange}
          value={title}
        />
        <br></br>
        Body : <br></br>
        <textarea
          placeholder="body"
          name="body"
          onChange={this.handleOnChange}
          value={body}
        />
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}
