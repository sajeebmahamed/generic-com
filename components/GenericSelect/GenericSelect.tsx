import React from 'react'

type Base = {
  id: string;
  title?: string;
}

type GenericSelectedProps<TValue> = {
  titleKey?: keyof TValue;
  values: TValue[];
  onChange: (value: TValue) => void;
}
const GenericSelect = <TValue extends Base>({
  titleKey = 'title',
  values,
  onChange
}: GenericSelectedProps<TValue>) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = values.find((value) => value.id === e.target.value);
    if (val) onChange(val);
  }

  
  return (
    <select onChange={handleChange}>
      {
        values.map((value) => (
          <option key={value.id} value={value.id}>
            {value[titleKey]}
          </option>
        ))
      }
      
    </select>
  )
}

export default GenericSelect