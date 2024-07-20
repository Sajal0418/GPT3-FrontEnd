import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Testing import PropTypes from 'prop-types'  
        </p>
      <div className='gpt3__header-content__input'>
        <input type='email' placeholder='EMail Address'/>
        <button type='button'>Get Started</button>
      </div>
      <div className='gpt3__header-content__people'>
        <img src={people} alt='People'/>
        <p>
          1,600 people requested access
        </p>
      </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='AI'/>
      </div>
    </div>
  )
}

export default header
