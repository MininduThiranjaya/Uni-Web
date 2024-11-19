import { students } from '../assets/StudentsDb.js'
import StudentTable from '../components/StudentTable.js';
import react,{useState} from 'react';

export default function Home() {

    const [fntSize, setFontSize] = useState(16);

    return (
        <>
            <center>
                <h1>Student Information Portal</h1>
            </center>
            <hr></hr>
            <div align="left" >
                Font Size: 
                <button onClick={()=>{setFontSize(16)}}>S</button>
                <button onClick={()=>{setFontSize(20)}}>M</button>
                <button onClick={()=>{setFontSize(24)}}>L</button>
            </div>
            <hr></hr>
            <div className='outerDiv' style={{ fontSize: `${fntSize}px`}}>
                <StudentTable stuDetails={students}/>   
            </div>
        </>
    )
}