import React, { Component, Fragment, ChangeEvent } from 'react';

export interface FormyProps {
  defaultValue: string;
  processText: (value: string) => void;
  btnText: string;
  autofocus: boolean;
  placeholder: string;
}

export interface FormyState {
  value: string;
}

export class Form extends Component<FormyProps, FormyState> {
  static defaultProps = {
    defaultValue: '',
    autofocus: false,
    placeholder: '',
  };

  state = {
    value: this.props.defaultValue,
  };

  handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
    this.setState({ value });

  handleClick = () => this.props.processText(this.state.value);

  render() {
    const { value } = this.state;
    const { btnText, autofocus, placeholder } = this.props;
    return (
      <Fragment>
        <textarea
          autoFocus={autofocus}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          rows={40}
          cols={80}
        />
        <button type="button" onClick={this.handleClick}>
          {btnText}
        </button>
      </Fragment>
    );
  }
}
