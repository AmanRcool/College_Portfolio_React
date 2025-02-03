import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
  
  <div className="programs" >
<div className="program">
<p>Graduation Degree</p>
    <img src={program_1} alt="" />
</div>
{/**next */}
<div className="program">
<p>Master's Degree</p>
<img src={program_2} alt="" />
</div>
{/**next */}
<div className="program">
<p>Post Graduation Degree</p>
<img src={program_2} alt="" />
</div>

  </div>
   
   
  )
}

export default Programs
