import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CapitalInformation } from './actions/index';
import CustomData from '../src/Constant/CustomData';
import DashboardTodo from '../src/DashboardTodo'; 
import './App.css';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country_name: '',
            capital_info_tab : false,

        }
    }

    HandelChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value }, function () {

        })
    }
    SubmitCapitalsInfo = () => {
        if(this.state.country_name !== ""){
            this.props.CapitalInformation(CustomData)
            this.setState({ capital_info_tab : true })
            this.props.history.push('/weather')
        }
    }


    render() {

        return (
            <React.Fragment>
                <div className='super_div'> 
                <div className='main_div'>
                <div class="form-group col-md-6">
                    <label for="country" >Country</label>
                    <input type="text" autoComplete='off' class="form-control" onChange={this.HandelChange} id="country" name='country_name' value={this.state.country_name} placeholder="Enter Country" />
                </div>
                <div class="form-group col-md-6">
                <button type="button" style={{'width':'125px'}} onClick={this.SubmitCapitalsInfo} disabled={this.state.country_name !== '' ? false : true} class="btn btn-primary">Submit</button>
                </div>
                </div>
                </div>
                {this.state.capital_info_tab === true ? 
                 <DashboardTodo props_info={this.state.capital_info_tab} /> : null
                }
            </React.Fragment>

        )
    }
}

export default connect(null, { CapitalInformation })(Dashboard)
