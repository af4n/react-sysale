import React, {useState} from 'react'
import './Select.scss'

const Select = ({option, setOption, options}) => {

  const [body, setBody] = useState(false)

  function toggleBody() {
    setBody(body => !body)
  }

  function optionClick(e) {
    setOption(e.target.textContent)
    setBody(false)
  }

  function selectHover() {
    if (body) {
      setBody(false)
    }
  }

  return (
    <div className='select' onMouseLeave={selectHover}>
      <div className='select-header' onClick={toggleBody}>
        <span className='select-current'>{option || 'Цвет'}</span>
        <div className={`select-icon ${body ? 'select-icon-hide' : 'select-icon-show'}`}>&#10095;</div>
      </div>

      <div className='select-body' style={{display: body ? 'block' : 'none'}} onMouseLeave={selectHover}>
        {options.map((option) =>
          <div className='select-item' onClick={optionClick} key={option}>{option}</div>
        )}
      </div>
    </div>
  )
}

export default Select;