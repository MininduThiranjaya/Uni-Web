import React from "react";
import location from '../assets/profilepic/1.jpg'
import style from '../assets/css/compo.css';


export default function Profile({selected}) {

    return (
        
        <>
            <table border={1}>
                <tr>
                    <td rowSpan={7}>
                        <img className='profile' src={require('../assets/profilepic/'+selected.profilePic)} alt="Profile Picture"/>
                    </td>
                </tr>
                <tr>
                    <td>ID : {selected.studentId}</td>
                </tr>
                <tr>
                    <td>Name :{selected.firstName} {selected.lastName}</td>
                </tr>
                <tr>
                    <td>Age : {selected.age}</td>
                </tr>
                <tr>
                    <td>Course : {selected.course}</td>
                </tr>
                <tr>
                    <td>Gender : {selected.gender}</td>
                </tr>
                <tr>
                    <td>Address : {selected.address.city}, {selected.address.country}</td>
                </tr>
                <tr>
                    <td>Skills : {selected.skills}</td>
                </tr>
            </table>           
        </>
    )
}