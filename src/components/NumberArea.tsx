import { ButtonComponent } from './Button';
import React from 'react';
import { Col } from 'reactstrap';

export const NumberArea = ({ fnClick }: any) => {
  return (
    <Col className='mt-3'>
      <ButtonComponent asignColor='primary' text='0' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='1' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='2' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='3' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='4' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='5' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='6' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='7' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='8' fnClick={fnClick} />
      <ButtonComponent asignColor='primary' text='9' fnClick={fnClick} />
    </Col>
  );
};
