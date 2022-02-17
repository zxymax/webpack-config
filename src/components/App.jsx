import React from 'react'
import Recipes from './Recipes'
import '../styles/app.scss'
import report from '../images/coalition_map_combined.jpeg'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <h1>hi react webpack</h1>
        <p>Fury at FWST-8 Battle Report</p>
        <img src={report} alt="Fury at FWST-8 Battle Report" />
    <Recipes />
    </main>
    </>
  )
}

export default App
