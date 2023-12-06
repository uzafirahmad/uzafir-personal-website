import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Education.css";
import award from '../../assets/award.svg'

const Education = () => {
  return (
    <div>
      <Navbar highlight="education" />
      <div className="blurrygradient_education" />
      <div className='education_child_div'>
        <div style={{display:"flex",flexDirection:"row"}}>
          <div id="time_and_title_master_div">
            <div id="time_div">
              <span id="time_div_2018">2018</span>
              <hr id="hr_time_div"></hr>
              <span id="time_div_2022">2022</span>
            </div>
            <div id="title_div">
              <span id="title_div_university">Institute of Space Technology, Islamabad, Pakistan</span>
              <span id="title_div_degree">Bachelors of Electrical Engineering.</span>
            </div>
          </div>
          <iframe className='behance_container' src="https://www.behance.net/embed/project/173362605?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div id="award_header_div"><span id="award_text">Awards</span><img id="award_image" src={award}/></div>
      </div>
    </div>
  )
}

export default Education