import React, { useState } from 'react';
import Select from 'react-select';
import './style.css';

function SearchForm() {
  const [selectedValue, setSelectedValue] = useState([]);
  const tagOptions = [
    { value: 'express', label: 'Express', color: '#00B8D9', isFixed: true },
    { value: 'postman', label: 'Postman', color: '#FF5630' },
    { value: 'nodejs', label: 'NodeJS', color: '#0052CC' },
    { value: 'restapi', label: 'REST API', color: '#5243AA' },
    { value: 'saga', label: 'Saga', color: '#FF8B00' },
    { value: 'react', label: 'React', color: '#FFC400' },
    { value: 'mongodb', label: 'MongoDB', color: '#FFC400' },
    { value: 'sass', label: 'Sass', color: '#FFC400' },
    { value: 'ubuntu', label: 'Ubuntu', color: '#FFC400' },
  ];
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    console.log('vvvv', JSON.stringify(selectedValue));
  };

  return (
    <div className='search-div'>
      <div className='search'>
        <Select
          onChange={handleChange}
          value={tagOptions.filter((obj) => selectedValue.includes(obj.value))}
          // defaultValue={[tagOptions[2], tagOptions[3]]}
          isMulti
          name='colors'
          options={tagOptions}
          className='basic-multi-select'
          classNamePrefix='select'
        />
      </div>
    </div>
  );
}

export default SearchForm;
