import React from 'react';

interface WarningInterface {
  warning: string;
}

export const WarningArea = ({ warning }: WarningInterface) => (
  <div className='border mt-3'>
    <h3>{warning}</h3>
  </div>
);
