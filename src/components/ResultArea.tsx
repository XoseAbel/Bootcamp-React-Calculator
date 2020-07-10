import React from 'react';

interface ResultInterface {
  result: string;
}

export const ResultArea = ({ result }: ResultInterface) => {
  let printResult = Intl.NumberFormat('de-DE').format(+result);
  if (printResult === 'NaN') {
    printResult = result;
  }
  return <h2 className='border mt-3'>{printResult}</h2>;
};
