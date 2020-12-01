import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {searchMentors } from '../../store/actions';
import { Button } from '@material-ui/core';
import './style.css';

function SearchForm() {
  const [checked, setChecked] = useState();
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch();
  const tags = [
    { value: 'express', label: 'Express', isFixed: true },
    { value: 'postman', label: 'Postman' },
    { value: 'nodejs', label: 'NodeJS' },
    { value: 'restapi', label: 'REST API' },
    { value: 'saga', label: 'Saga' },
    { value: 'react', label: 'React' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'sass', label: 'Sass' },
    { value: 'ubuntu', label: 'Ubuntu' },
  ];
  const tagOptions = tags.map((tag) => ({ ...tag, value: tag.label }));

  const handleChange = (e) => {
    setFilters(Array.isArray(e)? e.map(x=>x.value): []);
  };
  const handleChangeCheckbox = (e) => {
    console.log('>>>>', checked);
  };

  const handleClick = async () => {
    const query = filters.join(',');
    const repsonse = await fetch(
      `http://localhost:3100/mentor?skills=${query}`
    );
    const mentors = await repsonse.json(); // { [{}]} object with array of objects
    console.log(mentors);
    dispatch(searchMentors(mentors));
  };
  return (
    <div className='search-div'>
      <div className='search'>
        <Select
          onChange={handleChange}
          value={tagOptions.filter((obj) => filters.includes(obj.value))}
          // defaultValue={[tagOptions[2], tagOptions[3]]}
          isMulti
          name='skills'
          options={tagOptions}
          className='basic-multi-select'
          classNamePrefix='select'
          isClearable
        />
      </div>
      <Button onClick={handleClick}>Search</Button>

      <label>
        <input
          name='priceup'
          id='priceup'
          value='priceup'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Price Up
      </label>
      <br />
      <label>
        <input
          name='pricedown'
          id='pricedown'
          value='pricedown'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Price Down
      </label>
      <label>
        <input
          name='timezone'
          id='timezone'
          value='timezone'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Timezone
      </label>
    </div>
  );
}

export default SearchForm;
