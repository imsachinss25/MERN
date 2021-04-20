import React, { Component, Fragment , useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

const Display = ()=> {
    const [data,setData]=useState([]) ;
    useEffect(()=>{ 
        var request = new XMLHttpRequest(); 
        request.onreadystatechange = function() { 
        if (request.status == 200) { 
        const response=JSON.parse(request.response) 
        setData(response) 
        } 
        }; 
        request.open('GET', 'http://localhost:8000/students', true); 
        request.send(); 
        },[]) 
        
        useEffect(()=>{ 
        console.log(data[0]) 
        },[]) 

   return(

 <Fragment>
 <h2> Students Details </h2>


{
                data.map((value)=>{
                    return (
                        <Fragment>
                        
                        <div>
                        <div className="showDataStyle" > 
                        <div className=" dataItem heading">
                               <li> Name </li> 
                               <li> LastName </li> 
                               <li> Phone </li> 
                               <li> Roll </li> 
                               <li> Address </li>  
                       </div>
                       
                       <div className="dataItem items">
                               <li> {value.Name} </li> 
                               <li>{value.LastName} </li> 
                               <li> {value.Phone} </li> 
                               <li>{value.Roll}</li> 
                               <li> {value.Address}</li> 
                       </div>
                  
                                   <Link to={{
                                       pathname: "/Display/"+value._id,
                                       state: [{Name: value.Name,
                                       LastName: value.LastName,
                                       Phone: value.Phone,
                                       Roll: value.Roll,
                                       Address: value.Address,
                                       Key: value._id }]
                                   }}>   <EditIcon className="btn">
                           
                       </EditIcon> </Link>
                       </div>
                       </div> 
                       </Fragment>
                    ) 
                })
           }



</Fragment>
                        

     

   )
}

export default Display;
