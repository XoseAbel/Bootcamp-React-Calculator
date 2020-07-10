import { ButtonComponent } from './Button';
import React from 'react';
import { Col } from 'reactstrap';

export const OperatorArea = ({
  fnClick,
  fnClickCalculate,
  fnClickReset,
  fnClickDeleteLast,
}: any) => {
  return (
    <Col className='mt-3'>
      <ButtonComponent asignColor='primary' text='+' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='-' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='*' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='/' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='.' fnClick={fnClick} />
      <ButtonComponent
        asignColor='warning'
        text='←'
        fnClick={fnClickDeleteLast}
      />
      <ButtonComponent asignColor='danger' text='C' fnClick={fnClickReset} />
      <ButtonComponent
        asignColor='success'
        text='='
        fnClick={fnClickCalculate}
      />
    </Col>
  );
};
