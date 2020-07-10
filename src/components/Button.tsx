import React from 'react';
import { Button } from 'reactstrap';

interface ButtonInterface {
  text: string;
  asignColor: string;
  fnClick: (event: any) => void;
}

export const ButtonComponent = (props: ButtonInterface) => (
  <Button
    color={props.asignColor}
    value={props.text}
    className='mx-2'
    onClick={props.fnClick}
  >
    {props.text}
  </Button>
);
