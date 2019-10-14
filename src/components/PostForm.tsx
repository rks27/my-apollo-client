import React, { Component } from "react";

export default class PostForm extends Component<any> {
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
    const { createPost } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          createPost({
            variables: {
              title,
              body
            }
          })
            .then(() => this.setState({ body: "", title: "" }))
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
