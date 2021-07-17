import React, {useEffect,useState} from 'react'
import "./statewise.css"
const StateWise = ()=> {
    const [data,setData]=  useState([])
    const getCovidData=async() =>{
        const res= await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise)
        setData(actualData.statewise)
    }
    useEffect(() =>{
            getCovidData()
    },[]);

    return (
        <>
            
             <div className="container-fluid mt-5">
                 
                     <h1 className="title">INDIA COVID-19 Dashboard</h1>
                     
                <div className="table-responsive bg-white">
                    <table className="table table-striped table-hover myclass">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem,ind)=>{
                                    return(
                                    <tr key={ind}>
                                        <td>{curElem.state}</td>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>{curElem.active}</td>
                                        <td>{curElem.lastupdatedtime}</td>
                                    </tr>
                                    )
                                })
                            }
                       
                        </tbody>
                    </table>
                </div>
                 </div>
         
        </>
        
    )
}

export default StateWise