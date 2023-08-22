import { AccordionOpenStateType } from '../../../types';

const toggleValueByType = (id: string, state: AccordionOpenStateType | undefined) => {
  let value;

  if (Array.isArray(state)) {
    if (state.includes(id)) {
      value = state.filter((accordionId) => accordionId !== id);
    } else {
      value = [...state, id];
    }
  } else if (state === id) {
    value = undefined;
  } else {
    value = id;
  }

  return value;
};

export default toggleValueByType;
