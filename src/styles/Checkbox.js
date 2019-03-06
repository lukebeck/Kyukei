import React from 'react';
import styled from 'styled-components';

const Check = styled.div`
	padding: 3px;
	border-radius: 3px;
	position: relative;
  label {
    input {
      margin-right: 10px;
    }
  }
`;

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <Check>
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
        />
        {label}
      </label>
    </Check>
  );
  
  export default Checkbox;