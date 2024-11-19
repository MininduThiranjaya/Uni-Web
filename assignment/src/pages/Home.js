import { students } from '../assets/StudentsDb.js'
import StudentTable from '../components/StudentTable.js';

export default function Home() {

    return (
        <div className='outerDiv'>
            <StudentTable stuDetails={students}/>   
        </div>
    )
}