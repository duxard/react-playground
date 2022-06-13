import React from 'react';

type PropsType = {
  name: string;
};
type StateType = {};

export default class Home extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={this.onBtnClick}>Click</button>
      </>
    );
  }

  onBtnClick = (): void => {
    console.log('Click');
  }
}
