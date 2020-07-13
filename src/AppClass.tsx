import React from 'react';
import './App.css';
import { ResultArea } from './components/ResultArea';
import { RecordArea } from './components/RecordArea';
import { NumberArea } from './components/NumberArea';
import { OperatorArea } from './components/OperatorArea';
import { WarningArea } from './components/WarningArea';

interface MyState {
  result: string;
  warning: string;
  record: any[];
}

class AppClass extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: '',
      warning: '',
      record: [],
    };
  }

  handleResult = (event: any) => {
    let value = this.state.result + event.target.value;
    //resetear Warning
    if (this.state.warning) {
      this.setState({ ...this.state, warning: '' });
      value = event.target.value;
    }
    return this.setState({ ...this.state, result: value });
  };

  validate = () => /^[0-9|.]+(\+|-|\*|\/)[0-9|.]+$/.test(this.state.result);

  handleCalculate = () => {
    //verifico que usuario facilita operacion valida
    // console.log(this.validate());
    if (this.validate()) {
      const value = '' + eval(this.state.result);
      this.setState({ ...this.state, result: value });
      this.setState({
        ...this.state,
        record: [
          ...this.state.record,
          { operation: this.state.result, result: value },
        ],
      });
    } else {
      this.setState({ ...this.state, warning: 'Expresion no valida' });
    }
  };

  handleReset = () => {
    this.setState({ ...this.state, result: '' });
  };

  handleDeleteLast = () => {
    this.setState({ ...this.state, result: this.state.result.slice(0, -1) });
  };

  render() {
    return (
      <div className='App'>
        <NumberArea fnClick={this.handleResult} />
        <OperatorArea
          fnClick={this.handleResult}
          fnClickCalculate={this.handleCalculate}
          fnClickReset={this.handleReset}
          fnClickDeleteLast={this.handleDeleteLast}
        />
        <ResultArea result={this.state.result} />
        <RecordArea results={this.state.record} />
        <WarningArea warning={this.state.warning} />
      </div>
    );
  }
}

export default AppClass;
