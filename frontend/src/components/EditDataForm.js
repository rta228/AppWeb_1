import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class EditDataForm extends React.Component {
  state = {
    pk: 0,
    data: ""
  };

  componentDidMount() {
    if (this.props.data) {
      const { pk, data, data2, email } = this.props.data;
      this.setState({ pk, data , data2, email});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editData = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.editData}>
        <FormGroup>
          <Label for="data">Data:</Label>
          <Input
            type="text"
            name="data"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.data)}
          />
            <Label for="data2">Data2:</Label>
          <Input
            type="text"
            name="data2"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.data2)}
          />
          <Label for="email">Email:</Label>
          <Input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default EditDataForm;
