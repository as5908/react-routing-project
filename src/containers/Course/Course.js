import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null,
    id: null
  };

  componentDidMount() {
    const search = this.props.location.search;
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      console.log(param); // yields ['start', '5']
      this.setState({ [param[0]]: param[1] });
    }
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.state.id}</p>
      </div>
    );
  }
}

export default Course;
