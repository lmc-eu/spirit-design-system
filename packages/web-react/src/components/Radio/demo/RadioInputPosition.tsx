import React, { useState } from 'react';
import { FieldGroup } from '../../FieldGroup';
import Radio from '../Radio';

const RadioInputPosition = () => {
  const [selectedStart, setSelectedStart] = useState('option1');
  const [selectedEnd, setSelectedEnd] = useState('option1');
  const [selectedResponsive, setSelectedResponsive] = useState('option1');

  return (
    <>
      <FieldGroup id="field-group-radio-start" label="Input on Start (Default)">
        <Radio
          id="radio-start-option1"
          name="radioStart"
          label="Option 1"
          value="option1"
          inputPosition="start"
          isChecked={selectedStart === 'option1'}
          onChange={() => setSelectedStart('option1')}
        />
        <Radio
          id="radio-start-option2"
          name="radioStart"
          label="Option 2"
          value="option2"
          inputPosition="start"
          isChecked={selectedStart === 'option2'}
          onChange={() => setSelectedStart('option2')}
        />
      </FieldGroup>

      <FieldGroup id="field-group-radio-end" label="Input on End">
        <Radio
          id="radio-end-option1"
          name="radioEnd"
          label="Option 1"
          value="option1"
          inputPosition="end"
          isChecked={selectedEnd === 'option1'}
          onChange={() => setSelectedEnd('option1')}
        />
        <Radio
          id="radio-end-option2"
          name="radioEnd"
          label="Option 2"
          value="option2"
          inputPosition="end"
          isChecked={selectedEnd === 'option2'}
          onChange={() => setSelectedEnd('option2')}
        />
      </FieldGroup>

      <FieldGroup id="field-group-radio-responsive" label="Responsive Position">
        <Radio
          id="radio-responsive-option1"
          name="radioResponsive"
          label="Option 1"
          value="option1"
          inputPosition={{ mobile: 'start', tablet: 'end', desktop: 'start' }}
          isChecked={selectedResponsive === 'option1'}
          onChange={() => setSelectedResponsive('option1')}
        />
        <Radio
          id="radio-responsive-option2"
          name="radioResponsive"
          label="Option 2"
          value="option2"
          inputPosition={{ mobile: 'start', tablet: 'end', desktop: 'start' }}
          isChecked={selectedResponsive === 'option2'}
          onChange={() => setSelectedResponsive('option2')}
        />
      </FieldGroup>
    </>
  );
};

export default RadioInputPosition;
