import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { addValues, searchMentors } from '../../store/actions';
import Checkbox from '../Checkbox/Checkbox';
import styles from './SearchForm.module.css';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid green',
    color: state.selectProps.menuColor,
  }),
};
function SearchForm() {
  const selectedValue = useSelector((store) => store.selectedValues);
  const dispatch = useDispatch();
  const tags = [
    { value: 'express', label: 'Express', isFixed: true, color: 'pink' },
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
    <div className={styles.searchMain}>
      <div className={styles.searchDiv}>
        <div className={styles.search}>
          <Select
            styles={customStyles}
            onChange={handleChange}
            value={tagOptions.filter((obj) =>
              selectedValue.includes(obj.value)
            )}
            // defaultValue={[tagOptions[2], tagOptions[3]]}
            isMulti
            name='skills'
            options={tagOptions}
            className='basic-multi-select'
            className={styles.selectItem}
            classNamePrefix='select'
            isClearable

            // styles={customStyles}
          />
        </div>
        <div className={styles.searchButton}>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <Checkbox />
    </div>
  );
}

export default SearchForm;
