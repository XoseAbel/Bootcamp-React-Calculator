import React, { useState } from 'react';
import './App.css';
import { ResultArea } from './components/ResultArea';
import { RecordArea, RecordInterface } from './components/RecordArea';
import { NumberArea } from './components/NumberArea';
import { OperatorArea } from './components/OperatorArea';
import { WarningArea } from './components/WarningArea';

function App() {
  let [result, setResult] = useState('');
  let [warning, setWarning] = useState('');
  let [record, setRecord] = useState<RecordInterface[]>([]);

  // Imprimir en pantalla lo tecleado
  function handleResult(event: any) {
    let value = result + event.target.value;
    // console.log(Intl.NumberFormat('de-DE').format(+value));
    //resetear Warning
    if (warning) {
      setWarning('');
      value = event.target.value;
    }
    setResult(value);
  }

  //validar la operacion Expresion Regular
  const validate = () => /^[0-9|.]+(\+|-|\*|\/)[0-9|.]+$/.test(result);

  // Imprimir calcular lo impreso en pantalla
  function handleCalculate() {
    //verifico que usuario facilita operacion valida
    // console.log(validate());
    if (validate()) {
      const value = '' + eval(result);
      setResult(value);
      setRecord([...record, { operation: result, result: value }]);
    } else {
      setWarning('Expresion no valida');
    }
  }

  // Borrar todo el imput
  function handleReset() {
    setResult('');
  }
  //Borrar el ultimo valor
  function handleDeleteLast() {
    setResult(result.slice(0, -1));
  }

  return (
    <div className='App'>
      <NumberArea fnClick={handleResult} />
      <OperatorArea
        fnClick={handleResult}
        fnClickCalculate={handleCalculate}
        fnClickReset={handleReset}
        fnClickDeleteLast={handleDeleteLast}
      />
      <ResultArea result={result} />
      <RecordArea results={record} />
      <WarningArea warning={warning} />
    </div>
  );
}

export default App;
