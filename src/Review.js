import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0)
  const { name, id, job, image, text } = reviews[index]

  function plusItem() {
    index === 3 ? setIndex(0) : setIndex(index + 1)
  }
  function minusItem() {
    index === 0 ? setIndex(3) : setIndex(index - 1)
  }
  function randomItem() {
    const randomNumber = Math.floor(Math.random() * 4)
    setIndex(randomNumber)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt="" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={minusItem} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={plusItem} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomItem} className="random-btn">
        suprise me
      </button>
    </article>
  )
}

export default Review
