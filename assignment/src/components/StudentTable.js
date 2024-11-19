import React from "react";
import style from '../assets/css/compo.css';
import react,{useState} from 'react';
import Profile from "./Profile";


export default function StudentTable({stuDetails}) {

    const [selectedStu, setSelectedStu] = useState()

    function viewProfile(stuId) {

        const details = stuDetails.find((e) => e.studentId === stuId);

        setSelectedStu(details);
    }

    return (
        <>
            <div className='leftDiv'>

                <table border='1'>
                    <tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Course</th>
                        <th>Country</th>
                        <th>Profile</th>
                    </tr>
                    {
                        stuDetails.map((e,index) => {
                            
                            return (
                                <tr key={index}>
                                    <td>{e.firstName}</td>
                                    <td>{e.lastName}</td>
                                    <td>{e.course}</td>
                                    <td>{e.address.country}</td>
                                    <td><button onClick={() => {viewProfile(e.studentId)}}>View</button></td>
                                </tr>       
                            )
                        })
                    }
                </table>    
            </div>
            <div className='rightDiv'>
                {
                    selectedStu ? (
                        <Profile selected={selectedStu}/>
                    ) : (
                        <h4>See Profile Details</h4>  
                    )
                }
            </div>
        </>
    )
}