/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
  const data: any = {};
  for (const name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}

export function updateAll(inputs: any, newValue: any) {
  const newInputs: any = {};
  for (const name in inputs) {
    if (newValue.hasOwnProperty(name)) {
      if (typeof newValue[name] === "object" && newValue[name] !== null) {
        newInputs[name] = updateAll(inputs[name], newValue[name]);
      } else {
        newInputs[name] = { ...inputs[name], value: newValue[name] };
      }
    } else {
      newInputs[name] = inputs[name];
    }
  }
  return newInputs;
}
export function validate(inputs: any, name: string) {
  if (!inputs[name].validation) {
    return inputs;
  }
  const isInvalid = !inputs[name].validation(inputs[name].value);
  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: isInvalid.toString() },
  };
}
export function toDirty(inputs: any, name: string){
  return { ...inputs, [name]: { ...inputs[name], dirty: "true"}};

}
