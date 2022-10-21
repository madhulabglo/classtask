import React, { Component } from "react";

import "../detail/style.css"

class Details extends Component{
    constructor(){
        super()

        this.state={
            studentDetails:{names:"",gender:"",marks:""},
            details:[],
            display:false
        
        }
        this.handlechange=this.handleChange.bind(this)
        this.handleclick=this.handleClick.bind(this)
        this.handleshow=this.handleShow.bind(this)
    }

    handleChange(e){
        this.setState({studentDetails:{...this.state.studentDetails,[e.target.name]:e.target.value}})
    }

    handleClick(e){
        e.preventDefault()
        if(this.state.studentDetails.names !=="" &&this.state.studentDetails.gender !==""&&this.state.studentDetails.marks !==""){
        this.state.details.push(this.state.studentDetails)
        console.log(this.state.details)
        }
        this.setState({studentDetails:{names:"",gender:"",marks:""}})
    }

    handleShow(){
        this.setState({display:!this.state.display})  
    }

    render(){
        return(
            <>
            <div className="card">
            <center>
            <h1>Student Details</h1>
            <input type="text" name="names" placeholder="enter your name" value={this.state.studentDetails.names}onChange={this.handlechange}/><br/><br/>
             <input type="text" name="gender" placeholder="enter your gender" value={this.state.studentDetails.gender} onChange={this.handlechange}/><br/><br/>
            <input type="text" name="marks" placeholder="enter your marks" value={this.state.studentDetails.marks} onChange={this.handlechange}/><br/><br/>
            <button onClick={this.handleclick}>add</button>&nbsp;&nbsp;
            <button onClick={this.handleshow}>show</button><br/><br/>
            {this.state.display?
            <table border="1">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>marks</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.details.map((value,index)=>{
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{value.names}</td>
                            <td>{value.gender}</td>
                            <td>{value.marks}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>:
            <></>
            }
            </center>
            </div>
            </>
        )
    }
}
export default Details;