import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { SCREEN_SIZE } from '../../store/types';

import styles from './SearchForm.module.css';

import { searchMentors, setScreen } from '../../store/actions';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid green',
    color: state.selectProps.menuColor,
  }),
};
function SearchForm() {
  const likedMentors = useSelector((store) => store.likedMentors);
  const [filters, setFilters] = useState([]);
  const [checkedItems, setChecked] = useState({
    priceup: false,
    pricedown: false,
    timezone: false,
  });

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
    setFilters(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const handleChangeCheckbox = (e) => {
    setChecked({ ...checkedItems, [e.target.name]: e.target.checked });
  };

  const handleClick = async () => {
    const queryArr = [];
    const key = '1288100a174d447583eb11e7a4ab6d2c';

    if (filters.length) queryArr.push('skills=' + filters.join(','));

    // ACHTUNG !!!! COMMENT!!!! PART BELOW BEFORE BUILD !!

    // if (checkedItems.timezone) {
    //   const res = await fetch(
    //     `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&ip=17.142.160.59`
    //   );
    //   const timezoneData = await res.json();

    //   queryArr.push(`timezone=${timezoneData.time_zone.offset}`);
    // }

    // ACHTUNG !!!! UNCOMMENT PART BELOW BEFORE BUILD !!!!!!

    if (checkedItems.timezone) {
      const ipAddress = await fetch(
        'https://servertestmentor.herokuapp.com/ip'
      );
      const ipResult = await ipAddress.json();
      console.log('expected ip from the server  ipResult', ipResult);
      const res = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${key}&ip=${ipResult}`
      );
      const timezoneData = await res.json();
      console.log('result from geo API ', timezoneData);

      queryArr.push(`timezone=${timezoneData.time_zone.offset}`);
    }

    // ACHTUNG !!!! COMMENT!!!! PART BELOW BEFORE BUILD !!

    //   if (checkedItems.price)
    //     queryArr.push(`price=${checkedItems.down ? -1 : 1}`);
    //   const query = queryArr.join('&');

    //   console.log(query);
    //   const repsonse = await fetch(`http://localhost:3100/mentor?${query}`);
    //   const mentors = await repsonse.json();
    //   dispatch(setScreen(SCREEN_SIZE));

    //   dispatch(
    //     searchMentors({
    //       mentors: mentors.mentors.map((mentor) => ({
    //         ...mentor,
    //         liked: likedMentors.filter((el) => el === mentor._id).length === 1,
    //       })),
    //     })
    //   );
    // };

    // ACHTUNG !!!! UNCOMMENT PART BELOW BEFORE BUILD !!!!!!

    if (checkedItems.price)
      queryArr.push(`price=${checkedItems.down ? -1 : 1}`);
    const query = queryArr.join('&');

    console.log('query to the server', query);
    const repsonse = await fetch(
      `https://servertestmentor.herokuapp.com/mentor?${query}`
    );
    const mentors = await repsonse.json();
    console.log('list of mentors', mentors);
    dispatch(setScreen(SCREEN_SIZE));
    dispatch(
      searchMentors({
        mentors: mentors.mentors.map((mentor) => ({
          ...mentor,
          liked: likedMentors.filter((el) => el === mentor._id).length === 1,
        })),
      })
    );
  };

  return (
    <div className={styles.searchMain}>
      <div className={styles.searchDiv}>
        <div className={styles.search}>
          <Select
            onChange={handleChange}
            value={tagOptions.filter((obj) => filters.includes(obj.value))}
            // defaultValue={[tagOptions[2], tagOptions[3]]}
            isMulti
            name='skills'
            options={tagOptions}
            className='basic-multi-select'
            classNamePrefix='select'
            className={styles.selectItem}
            isClearable
          />
        </div>
        <div className={styles.searchButton}>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div className={styles.checkboxMain}>
        <label className={styles.label}>
          <input
            className={styles.checkInput}
            name='price'
            type='checkbox'
            onChange={handleChangeCheckbox}
          />
          Price
        </label>

        <label className={styles.label}>
          <input
            className={styles.checkInput}
            disabled={!checkedItems.price}
            name='down'
            type='checkbox'
            onChange={handleChangeCheckbox}
          />
          Down
        </label>
        <label className={styles.label}>
          <input
            className={styles.checkInput}
            name='timezone'
            type='checkbox'
            onChange={handleChangeCheckbox}
          />
          Timezone
        </label>
      </div>
    </div>
  );
}

export default SearchForm;
