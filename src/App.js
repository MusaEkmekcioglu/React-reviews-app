import React from 'react'
import Review from './Review'
import reviews from './data'
import { FaChild } from 'react-icons/fa'

function App() {
  console.log(reviews)

  return (
    <div>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>

          <Review reviews={reviews} />
        </section>
      </main>
    </div>
  )
}

export default App
