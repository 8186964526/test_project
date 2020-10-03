import React, { useState } from 'react';
import { TemparatureInformation } from './actions/index';
import { connect } from 'react-redux';
import TemparatureInfo from '../src/Constant/TemparatureInfo';
import { Link } from 'react-router-dom';



function DashboardTodo(props) {
    const [state, setState] = useState({
        temparature: false
      })
    let capital_info = '';
    if (props.CapitalsInfo !== undefined && props.CapitalsInfo.length > 0) {
        capital_info = props.CapitalsInfo.map((list, idx) => {
            return (
                <tbody>
                    <tr key={idx}>
                        <td>{list.capital !== "" ? list.capital : ""}</td>
                        <td>{list.population !== "" ? list.population : ""}</td>
                        <td>{list.lat !== "" ? list.lat : ""}</td>
                        <td>{list.long !== "" ? list.long : ""}</td>
                        <td>{list.flag !== "" ? <img style={{'width' : '50px'}} src={list.flag} alt='flag_img' /> : '-'}</td>

                    </tr>
                </tbody>
            )
        })
    } else {
        capital_info = (
            <tbody>
                <tr>
                    <td
                        colSpan="10"
                        align="center"
                        style={{
                            background: "lightyellow",
                            padding: "30px",
                            fontSize: "large"
                        }}
                    >
                        NO Records Found
                </td>
                </tr>
            </tbody>
        )
    }
    const WeatherInfo = () => {
      setState({ temparature : true });
        props.TemparatureInformation(TemparatureInfo)
    }

    let Capital_Weather = '';
    Capital_Weather = (
            <input type='button' className='buuton_design' onClick={WeatherInfo} value='Capital Weather' />
        // </div>
    )
    const { temparature } = state;
    let temp_details = ''
    if( props.TemparatureInfo !== undefined &&  props.TemparatureInfo.length > 0){
        temp_details =   props.TemparatureInfo.map((temp,id)=>{
            return (
            <tbody>
            <tr key={id}>
                <td >{temp.temperature !== "" ?   <span>{temp.temperature} &#8451;</span>: ""}</td>
                <td>{temp.weather_icons !== "" ? <img style={{'width' : '50px'}} src={temp.weather_icons} alt='cloud_img' /> : ""}</td>
                <td>{temp.wind_speed !== "" ? temp.wind_speed : ""}</td>
                <td>{temp.precip !== "" ? temp.precip : ""}</td>

            </tr>
        </tbody>
            )
        })
    } else{
        temp_details = (
            <tbody>
                <tr>
                    <td
                        colSpan="10"
                        align="center"
                        style={{
                            background: "lightyellow",
                            padding: "30px",
                            fontSize: "large"
                        }}
                    >
                        NO Records Found
                </td>
                </tr>
            </tbody>
        )
    }
    return (
        <React.Fragment>
            { temparature === false  ?
            <React.Fragment>
            {Capital_Weather}
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Capital</th>
                        <th scope="col">Population</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Flag</th>

                    </tr>
                </thead>
                { capital_info }
            </table>
            </React.Fragment> : 
             <React.Fragment>
                   <div>
                 <Link to='/' className='buuton_design' >Back To Home</Link>
             </div>
             <table className="table">
                 <thead className="thead-dark">
                     <tr>
                         <th scope="col">Temperature</th>
                         <th scope="col">Weather_icons</th>
                         <th scope="col">Wind_speed</th>
                         <th scope="col">Recip</th>
 
                     </tr>
                 </thead>
                 { temp_details }
             </table>
           
       
        </React.Fragment>
}
</React.Fragment>

    )
}
const mapStateToProps = (state) => {
    return {
        CapitalsInfo: state.reducer.data,
        TemparatureInfo : state.reducer.todo
    }
}

export default connect(mapStateToProps, { TemparatureInformation })(DashboardTodo)

