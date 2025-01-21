import logo from './logo.svg';
import './App.css';
import EducationSection from './education';
import Areaofintrest from './areaofinterest';
import Projectsinfo from './projects';
import Hobbiesinfo, { Personalinfo } from './hobbies';
import Common from './common';
import { useState } from 'react';
import NameInput from './headerinput';
import Header from './userdetails';
import pht from './user.png'
import Educationinput from './educationinput';
import Intrestinput from  './intrestinput'
import Projectinput from './projectinput';
import Hobbiesinput from './hobbiesinput';
import DownloadPDFExample from './pdf';

function App() {
  // header
      const [inputName, setInputName] = useState('Maddy');
      const handleNameChange = (value) => {
          setInputName(value);
      };

      const [inputMail, setInputMail] = useState('yaronaa420@gmailcom');
      const handleMailChange = (value) => {
          setInputMail(value);
      };

      const [phoneNum,setInputPhone]=useState('1234567890')
      const handlePhoneChange = (value) => {
        setInputPhone(value);
    };

    const [link,setInputLink]=useState('https://github.com/Mathanvs003')
      const handleLinkChange = (value) => {
        setInputLink(value);
    };

    const [images,setInputImage]=useState(pht)
      const handleImageChange = (value) => {
        setInputImage(value);
    };


    //education 
    const [clg,setInputcollege]=useState('Merit Arts & Science College')
      const handleCollegeChange = (value) => {
        console.log("hii",value);
        setInputcollege(value);
    };

    const [degree,setInputdegree]=useState('Merit Arts & Science College')
    const handleDegreeChange = (value) => {
      console.log("hii",value);
      setInputdegree(value);
  };

  const [period,setInputperiod1]=useState('2021-2024')
    const handlePeriod1Change = (value) => {
      console.log("hii",value);
      setInputperiod1(value);
  };

  const [loc1,setInputLoc ]=useState('Idaikal, Tirunelveli')
    const handleLocation1Change = (value) => {
      console.log("hii",value);
      setInputLoc(value);
  };

  const [schl1,setInputschl1 ]=useState('Senaithalaivar Hr.Sec.School')
    const handleSchool1Change = (value) => {
      console.log("hii",value);
      setInputschl1(value);
  };

  const [ped1,setInputped1 ]=useState('2019-2021')
    const handlePeriod2Change = (value) => {
      console.log("hii",value);
      setInputped1(value);
  };

  const [loc2,setInputLoc2 ]=useState('Vickramasingapuram, Tirunelveli')
    const handleLocation2Change = (value) => {
      console.log("hii",value);
      setInputLoc2(value);
  };

  const [schl2,setInputschl2 ]=useState('Senaithalaivar Hr.Sec.School')
    const handleSchool2Change = (value) => {
      console.log("hii",value);
      setInputschl2(value);
  };

  const [ped2,setInputped2 ]=useState('2018-2019')
    const handlePeriod3Change = (value) => {
      console.log("hii",value);
      setInputped2(value);
  };

  const [loc3,setInputLoc3 ]=useState('Vickramasingapuram, Tirunelveli')
    const handleLocation3Change = (value) => {
      console.log("hii",value);
      setInputLoc3(value);
  };
    

  // area of interest

  const [int1,setInputint1 ]=useState('Game Developer')
  const handleInt1Change = (value) => {
    console.log("hii",value);
    setInputint1(value);
};

const [int2,setInputint2 ]=useState('Software Developer')
const handleInt2Change = (value) => {
  console.log("hii",value);
  setInputint2(value);
};

const [int3,setInputint3 ]=useState('Database Administration')
const handleInt3Change = (value) => {
  console.log("hii",value);
  setInputint3(value);
};

// projects

const [pro1,setInputpro1 ]=useState('Hotel Reservation')
const handlepro1Change = (value) => {
  console.log("hii",value);
  setInputpro1(value);
};

const [pro2,setInputpro2 ]=useState('Otp Via Mail')
const handlepro2Change = (value) => {
console.log("hii",value);
setInputpro2(value);
};

const [pro3,setInputpro3 ]=useState('Institution')
const handlepro3Change = (value) => {
console.log("hii",value);
setInputpro3(value);
};

const [date1,setInputdate1 ]=useState('jan 2024')
const handledate1Change = (value) => {
  console.log("hii",value);
  setInputdate1(value);
};

const [date2,setInputdate2 ]=useState('may 2024')
const handledate2Change = (value) => {
console.log("hii",value);
setInputdate2(value);
};

const [date3,setInputdate3 ]=useState('nov 2024')
const handledate3Change = (value) => {
console.log("hii",value);
setInputdate3(value);
};

const [hob1,setInputhob1 ]=useState('Reading Books')
  const handlehob1Change = (value) => {
    console.log("hii",value);
    setInputhob1(value);
};

const [hob2,setInputhob2 ]=useState('Playing Games')
const handlehob2Change = (value) => {
  console.log("hii",value);
  setInputhob2(value);
};

const [hob3,setInputhob3 ]=useState('Listening Music')
const handlehob3Change = (value) => {
  console.log("hii",value);
  setInputhob3(value);
};

const [per1,setInputper1 ]=useState('Autodidact')
  const handleper1Change = (value) => {
    console.log("hii",value);
    setInputper1(value);
};

const [per2,setInputper2 ]=useState('Self-Motivation')
const handleper2Change = (value) => {
  console.log("hii",value);
  setInputper2(value);
};

const [per3,setInputper3 ]=useState('Adaptability')
const handleper3Change = (value) => {
  console.log("hii",value);
  setInputper3(value);
};

  return(
    <div className="divide">
        {/* <Common/> */}
      <div className='one'>
        <NameInput handleNameChange={handleNameChange} handleMailChange={handleMailChange} handlePhoneChange={handlePhoneChange}  handleLinkChange={handleLinkChange} handleImageChange={handleImageChange}/>  
        <Educationinput handleCollegeChange={handleCollegeChange} handleDegreeChange={handleDegreeChange} handlePeriod1Change={handlePeriod1Change} handleLocation1Change={handleLocation1Change} handleSchool1Change={handleSchool1Change} handlePeriod2Change={handlePeriod2Change} handleLocation2Change={handleLocation2Change} handleSchool2Change={handleSchool2Change} handlePeriod3Change={handlePeriod3Change} handleLocation3Change={handleLocation3Change} />
        <Intrestinput handleInt1Change={handleInt1Change} handleInt2Change={handleInt2Change} handleInt3Change={handleInt3Change} />
        <Projectinput handlepro1Change={handlepro1Change} handlepro2Change={handlepro2Change} handlepro3Change={handlepro3Change} handledate1Change={handledate1Change} handledate2Change={handledate2Change} handledate3Change={handledate3Change}/>
        <Hobbiesinput handlehob1Change={handlehob1Change} handlehob2Change={handlehob2Change} handlehob3Change={handlehob3Change} handleper1Change={handleper1Change} handleper2Change={handleper2Change} handleper3Change={handleper3Change}/>
        {/* <DownloadPDFExample/> */}
      
      </div>
      <div className="two">
        <Header inputName={inputName} inputMail={inputMail} phoneNum={phoneNum}  link={link} images={images}  />
        <EducationSection clg={clg} degree={degree} period={period} loc1={loc1} schl1={schl1} ped1={ped1} loc2={loc2} schl2={schl2} ped2={ped2} loc3={loc3} />
        <Areaofintrest int1={int1} int2={int2} int3={int3} />
        <Projectsinfo pro1={pro1} pro2={pro2} pro3={pro3} date1={date1} date2={date2} date3={date3}/>
        <Hobbiesinfo hob1={hob1} hob2={hob2} hob3={hob3} per1={per1} per2={per2} per3={per3}/>
        {/* <Personalinfo/> */}
      </div>
    </div>
  );
}

export default App;
