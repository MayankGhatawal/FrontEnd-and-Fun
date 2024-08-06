import React from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'

function App() {

  useGSAP(()=> {
    gsap.from('.page1-hidden', { duration: 1, x: -100, ease: 'elastic.in' })
    gsap.from('.page2-hidden', { duration: 1, x: 100, ease: 'elastic.in' })
    gsap.from('.page3-hidden', { duration: 1, x: 200, ease: 'elastic.in' })
  })

  return (
    <>
      <div className="page1">
        <div className="page1-hidden">

        </div>

      </div>
      <div className="page2">
      <div className="page2-hidden">
          
          </div>

      </div>
      <div className="page3">
      <div className="page3-hidden">
          
          </div>

      </div>
    </>
  )
}

export default App
