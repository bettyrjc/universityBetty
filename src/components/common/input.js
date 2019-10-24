import React from 'react'
import PropTypes from 'prop-types';
 const input = ({
   id,
   label,
   value,
   type,
   onChange,
   error,
   active_label, 
   size,
   placeholder
 })=> {
  return (
     <div className="row">
        <label htmlFor={id} className={`${active_label && "active"} left`}>
        {label}
      </label>
       {
         active_label  || placeholder ? (
          <div className={`input-field col ${size}`}>
              <input 
              id={id}
              type={type}
              name={id}
              value={value}
              onChange={onChange}
              placeholder={placeholder ? placeholder : ""}
              className="validate"/>
             
            </div>
         ) :(
          <div className={`input-field col ${size}`}>
          <input 
          type={type}
          name={id}
          value={value}
          onChange={onChange}
          className="validate"/>
        </div>
         )}
     

      {error && <span className="helper-text text-danger">{error}</span>}  
      </div>
        )

}
input.propType = {
  label: PropTypes.string.isRequired,
  size:  PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  active_label: PropTypes.bool.isRequired,
  placeholder: PropTypes.string

}
input.defaultProps = {
  size:'s12',
  type: 'text',
  active_label: false,
  error: null,
  placeholder: null
};
export default input;