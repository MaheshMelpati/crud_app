import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Data() {
  const [data,setData]  = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    getData()
},[])
const getData = async ()=>{
const data1 = await localStorage.getItem('edata');
let dert = JSON.parse(data1)
setData(dert)
console.log('dert', dert)
}
const TitleHandelar =(mainDta)=>{
  console.log('mainDta',mainDta);
navigate("/update", {state:{data:mainDta}});
}
  return (
   <>
   <div className='container-fluid mt-5'>
    <div className='w-100 float-start mb-5 border-bottom pb-2'>
      <h3 className='w-50 float-start'>Job List</h3>
   <Link className='float-end btn btn-info' to="/new">New</Link>
    </div>
   <div className='row'>
   <div className='card-main'>
   {
    data && data.length > 0 ?
    data.map((d,i)=>{
      return(
        <div className="card mb-3 col-md-3 col-xs-6 col-xs-12"  key={i}>       
        <div className="card-body">
        <div className="card-img">
          <img src={d.Company} className='w-100 shadow-sm ' />
        </div>
        <div className="card-txt w-100 float-start mt-2">
            <h4 className="card-title" onClick={()=>TitleHandelar(d)}>{d.JobTitle}</h4>
            <p>{d.JobType}</p>
            <p>{d.JobFunction}</p>
            <p>{d.Skills}</p>
            <p>{d.Location}</p>
        </div>
         
        </div>
      </div>
  )}):
    <h1 className='text-primary'>No Data...</h1>
   }
   </div>
   </div>
   </div>
   </>
  )
}

export default Data