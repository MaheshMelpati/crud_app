import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function New() {
  const navigate = useNavigate()
  const [state, setState] = useState({
    Id:"",
    JobTitle: "",
    JobFunction: "",
    JobType: "",
    Experience: "",
    Salary: "",
    JobExpires: "",
    Skills: "",
    Company: "",
    Location: ""
  })
  const  handleChange =(evt) =>{
   // const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  }
  const submitData = async()=>{
    const obj = {
      Id:`${uuidv4()}`,
      JobTitle: state.JobTitle,
      JobFunction: state.JobFunction,
      JobType: state.JobType,
      Experience: state.Experience,
      Salary: state.Salary,
      JobExpires: state.JobExpires,
      Skills: state.Skills,
      Company: state.Company,
      Location: state.Location
  }
    const eventData = await localStorage.getItem('edata')
        if(eventData != null){
            const fer = JSON.parse(eventData)            
            let arr = [...fer]
            arr.push(obj)
            let data = await localStorage.setItem("edata",JSON.stringify(arr))
            navigate('/')
        }
        else{
            let arr = []
            arr.push(obj)
            let data = await localStorage.setItem("edata",JSON.stringify(arr))
            navigate('/')
        }
  }
  return (
    <>
    <div className='container-fluid mt-5'>
    <div className='w-100 float-start mb-5 border-bottom pb-2'>
      <h3 className='w-50 float-start'>Job Form</h3>
      <Link className='float-end btn btn-info' to="/">Back</Link>
   </div>
   <div className='w-50 mx-auto'>

  <div className="mb-3 mt-5">
    <label className="form-label">Job Title:</label>
    <input type="text" className="form-control" placeholder="Enter Job Title"  name="JobTitle" value={state.JobTitle} onChange={handleChange}/>
  </div>
  <div className="mb-3 ">
    <label className="form-label">Job Function:</label>
    <input type="text" className="form-control" placeholder="Enter Job Function" name="JobFunction" value={state.JobFunction} onChange={handleChange} />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Job Type:</label>
    <input type="text" className="form-control" placeholder="Enter Job Type" name="JobType" value={state.JobType} onChange={handleChange} />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Experience:</label>
    <input type="text" className="form-control"  placeholder="Enter Experience" name="Experience" value={state.Experience} onChange={handleChange} />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Salary:</label>
    <input type="text" className="form-control" placeholder="Enter Salary" name="Salary" value={state.Salary} onChange={handleChange}  />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Job Expires:</label>
    <input type="text" className="form-control" placeholder="Enter Job Expires" name="JobExpires" value={state.JobExpires} onChange={handleChange} />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Skills:</label>
    <input type="text" className="form-control"  placeholder="Enter Skills" name="Skills" value={state.Skills} onChange={handleChange} />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Company logo:</label>
    <input type="text" className="form-control"  placeholder="Enter Company logo link" name="Company" value={state.Company} onChange={handleChange}  />
  </div>
  <div className="mb-3 ">
    <label className="form-label">Location:</label>
    <input type="text" className="form-control"  placeholder="Enter Location" name="Location" value={state.Location} onChange={handleChange}  />
  </div>
  <div className="mb-3 ">
    <button className='btn btn-info' onClick={submitData}>Submit</button>
  </div>
 </div>
 </div>
    </>
  )
}

export default New