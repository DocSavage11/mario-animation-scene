import React from 'react'
import './Main.css'

const Main = () => {

    // const [driveMario, setDriveMario] = useState(false);

    // const goMario = (e) => {
    //     setDriveMario((prevState) => !prevState)
    // } 

  return (
    <div className="Container">
        <div className="Sky">
            <img src={require('../../Assets/Imagies/Cloud.png')} alt="" className="Cloud Cloud-1 Wind-Cloud-1" />
            <img src={require('../../Assets/Imagies/Cloud.png')} alt="" className="Cloud Cloud-2 Wind-Cloud-2" />
        </div>

        <div className="Grass">

        </div>

        <div className="Road">
            <div class="Lines"></div>
            {/* <img onClick={goMario} src={require('../../Assets/Imagies/Mario.png')} className={driveMario ?"Mario Drive-Mario" : "Mario" }alt="" /> */}

            
            <img src={require('../../Assets/Imagies/Mario.png')} className="Mario Drive-Mario" alt="" />


            <img src={require('../../Assets/Imagies/Luigi.png')} className="Luigi Drive-Luigi" alt="" />
        </div>
    </div>
  )
}

export default Main