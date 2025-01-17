import logo from './logo.svg';
import './App.css';
import Header from './userdetails';
import EducationSection from './education';
import Areaofintrest from './areaofinterest';
import NameInput from './egresume';
import Projectsinfo from './projects';
import Hobbiesinfo, { Personalinfo } from './hobbies';

function App() {
  return(
    <div className="divide">
      <NameInput />
      <div className="two">
        <Header/>
        <EducationSection/>
        <Areaofintrest/>
        <Projectsinfo/>
        <Hobbiesinfo/>
        {/* <Personalinfo/> */}
      </div>
    </div>
  );
}

export default App;
