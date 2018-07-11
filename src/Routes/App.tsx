import * as React from 'react';

export interface HelloProps { title: string; name: string; }

export class App extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}