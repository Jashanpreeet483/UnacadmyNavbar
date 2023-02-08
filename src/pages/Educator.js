import React from 'react'
import './educator.css'
import educator1 from './educator-01.jpg'
import educator4 from './educator-04.jpg'
const Educator = () => {
  return (
    <div className="educator">
      <div className="educator-content">
    <h3>India's top educator <br /> to learn from </h3>
    <div className="icon">
     <i className='fa fa-check-square'> Proven history of delievering results</i>
     <i className='fa fa-check-square'> Mentored past rankers</i>
      <i className='fa fa-check-square'> Unique style of teaching </i>
    </div>  
</div>


{/* -------------------------------------div grid--------------------------------- */}

<div className="main-div">
  {/* --------------------------------subdiv1--------------------------------- */}
  <div className="div1">
    <div className="subdiv1">
      <img src={educator1} alt="" />
    </div>
    <div className="div1-content">
        <h2>Vineet Loomba</h2> <br />
        <p> A game-changer in Mathematics and a mentor to 100 percentile in 2021 & 2022, his courses are regarded as the...... </p>
        <br />
        <button id='educator-btn1'>166 M <br /> <p> Watch Time</p> </button>
        <button id='educator-btn2'> 135 K <br /><p> Followers</p></button>
        <br />
        <button className='view-profile'>View Profile 
        <i className='fa fa-angle-right'></i></button>
    </div>
  </div>

  {/* ----------------------------sub-div2------------------------- */}
  <div className="div2"> <div className="subdiv1">
      <img src={educator1} alt="" />
    </div>
    <div className="div1-content">
        <h2>Vineet Loomba</h2> <br />
        <p> A game-changer in Mathematics and a mentor to 100 percentile in 2021 & 2022, his courses are regarded as the...... </p>
        <br />
        <button id='educator-btn1'>166 M <br /> <p> Watch Time</p> </button>
        <button id='educator-btn2'> 135 K <br /><p> Followers</p></button>
        <br />
        <button className='view-profile'>View Profile 
        <i className='fa fa-angle-right'></i></button>
    </div>
    </div>
    {/* -------------------------------------div3--------------------------- */}
  <div className="div3"> <div className="subdiv1">
      <img src={educator1} alt="" />
    </div>
    <div className="div1-content">
        <h2>Vineet Loomba</h2> <br />
        <p> A game-changer in Mathematics and a mentor to 100 percentile in 2021 & 2022, his courses are regarded as the...... </p>
        <br />
        <button id='educator-btn1'>166 M <br /> <p> Watch Time</p> </button>
        <button id='educator-btn2'> 135 K <br /><p> Followers</p></button>
        <br />
        <button className='view-profile'>View Profile 
        <i className='fa fa-angle-right'></i></button>
    </div>
    </div>
    {/* ----------------------------div4------------------------------- */}
  <div className="div4"> <div className="subdiv1">
      <img src={educator1} alt="" />
    </div>
    <div className="div1-content">
        <h2>Vineet Loomba</h2> <br />
        <p> A game-changer in Mathematics and a mentor to 100 percentile in 2021 & 2022, his courses are regarded as the...... </p>
        <br />
        <button id='educator-btn1'>166 M <br /> <p> Watch Time</p> </button>
        <button id='educator-btn2'> 135 K <br /><p> Followers</p></button>
        <br />
        <button className='view-profile'>View Profile 
        <i className='fa fa-angle-right'></i></button>
    </div>
    </div>
</div>
    <div className="lastbtn">
      <button>View all Educators</button>
    </div>
</div>
  )
}

export default Educator