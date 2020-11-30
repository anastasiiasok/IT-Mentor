import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { addValues, searchMentors } from '../../store/actions';
import { Button } from '@material-ui/core';
import './style.css';

function SearchForm() {
  const selectedValue = useSelector((store) => store.selectedValues);
  const dispatch = useDispatch();
  const tags = [
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
  const tagOptions = tags.map((tag) => ({ ...tag, value: tag.label }));

  const handleChange = (e) => {
    let values = [];
    if (Array.isArray(e)) values = e.map((x) => x.value);
    dispatch(addValues({ values }));
  };

  const handleClick = async () => {
    const query = selectedValue.join(',');
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
          value={tagOptions.filter((obj) => selectedValue.includes(obj.value))}
          // defaultValue={[tagOptions[2], tagOptions[3]]}
          isMulti
          name='colors'
          options={tagOptions}
          className='basic-multi-select'
          classNamePrefix='select'
        />
      </div>
      <Button onClick={handleClick}>Search Mentors</Button>
    </div>
  );
}

export default SearchForm;
