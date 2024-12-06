import React from 'react'
import "./HubnexLeaders.css"

const HubnexLeaderCard :React.FC = () => {
  return (
    <div>
      <div className="Rv_card">
            <div className="Rv_img">
                <img src="https://cdn.theorg.com/0d8f32f8-904e-4034-a87e-eff7658c9d10_medium.jpg" alt="" className="imagestyle"/>
            </div>
            <div className="">
                <div className='w-full'>
                <h3 className='text-2xl font-bold'>Ranveer Singh</h3>
                <p>CEO & Founder</p>
                <p>Yatra sought to optimise and improve verticals to facilitate greater cooperation with its partners, boost customer experience, and streamline operations.verticals to facilitate greater cooperation with its partners, boost customer experience.</p>
                <a href="#">Follow on LinkedIn</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HubnexLeaderCard;
