import * as React from 'react';

import { logs } from '../Utils/logs/index';

logs();

export interface IHelloProps { title: string; name: string; }

export class App extends React.Component<IHelloProps, {}> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
