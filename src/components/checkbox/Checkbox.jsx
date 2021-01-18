import React, {useState} from 'react'
import './Chexkbox.scss'

const Checkbox = ({volume, isChecked}) => {
  return (
    <div>
      <div className="checkbox">
        <input className="custom-checkbox"
               type="checkbox"
               id="checkbox-100"
               name="color-1"
               onClick={isChecked = !isChecked} checked/>
        <label htmlFor="checkbox-100">{volume[0]} мл</label>
      </div>
      <div className="checkbox">
        <input className="custom-checkbox"
               type="checkbox"
               id="checkbox-200"
               name="color-2"
               onClick={isChecked = !isChecked}/>
        <label htmlFor="checkbox-200">{volume[1]} мл</label>
      </div>
      <div className="checkbox">
        <input className="custom-checkbox"
               type="checkbox"
               id="checkbox-300"
               name="color-3"
               onClick={isChecked = !isChecked}/>
        <label htmlFor="checkbox-300">{volume[2]} мл</label>
      </div>
    </div>
  );
}
export default Checkbox;