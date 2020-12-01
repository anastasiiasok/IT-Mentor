import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { addValues, searchMentors } from '../../store/actions';

import './style.css';

function Checkbox() {
  const [checkedItems, setChecked] = useState({
    priceup: false,
    pricedown: false,
    timezone: false,
  });

  const handleChangeCheckbox = (e) => {
    setChecked({ ...checkedItems, [e.target.name]: e.target.checked });
  };
  console.log('>>>>', checkedItems);

  return (
    <div className='checkbox-main'>
      <label className='label'>
        <input
          className='checkInput'
          disabled={checkedItems.pricedown}
          name='priceup'
          id='priceup'
          value='priceup'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Price
      </label>

      <label className='label'>
        <input
          className='checkInput'
          disabled={checkedItems.priceup}
          name='pricedown'
          id='pricedown'
          value='pricedown'
          type='checkbox'
          onChange={handleChangeCheckbox}
        />
        Down
      </label>
      <label className='label'>
        <input
          className='checkInput'
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

export default Checkbox;
