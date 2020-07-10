import React from 'react';

export interface RecordInterface {
  operation: string;
  result: string;
}

interface PropsInterfaceRecord {
  results: RecordInterface[];
}

export const RecordArea = (props: PropsInterfaceRecord) => (
  <div className='border mt-3'>
    <h3>Records</h3>
    {props.results.map(value => (
      <ul>
        {value.operation}={value.result}
      </ul>
    ))}
  </div>
);
