import React from 'react';
import { Checkbox, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

interface CheckboxComponent{
    labelName:string;
    inputName:string;
    register: UseFormRegister<any>;
}

const CheckboxComponent = ({ labelName, inputName, register }:CheckboxComponent) => {
  return (
    <FormControl>
      <FormLabel htmlFor={inputName}>{labelName}</FormLabel>
      <Stack direction="row" spacing={4}>
        <Checkbox {...register(`${inputName}`)}>
          Sim
        </Checkbox>
      </Stack>
    </FormControl>
  );
};

export default CheckboxComponent;
