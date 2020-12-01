import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {searchMentors } from '../../store/actions';
import { Button } from '@material-ui/core';
import './style.css';

function SearchForm() {
  const [filters, setFilters] = useState([]);
  const [checkedItems, setChecked] = useState({
    priceup: false,
    pricedown: false,
    timezone: false,
  });

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
    setChecked({ ...checkedItems, [e.target.name]: e.target.checked });
  };
  
  const handleClick = async () => {
    const queryArr = [];

    if (filters.length) queryArr.push('skills='+filters.join(','));
    if (checkedItems.timezone) queryArr.push('timezone=+3');
    if (checkedItems.price) queryArr.push(`price=${checkedItems.down? -1: 1}`);
    const query =queryArr.join('&');
    console.log(query);
    const repsonse = await fetch(
      `http://localhost:3100/mentor?${query}`
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
          name='price'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Price
      </label>
      <br />
      <label>
        <input
          disabled={!checkedItems.price}
          name='down'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Down
      </label>
      <label>
        <input
          name='timezone'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Timezone
      </label>
    </div>
  );
}

export default SearchForm;
