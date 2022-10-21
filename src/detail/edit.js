import React, { Component } from "react";

import "../detail/style.css"

class Remove extends Component{
    constructor(){
        super()
        this.studentsList = [
            {
            name:"arun",
            gender:"male",
            marks:"20",
          },{
            name:"jinusha",
            gender:"female",
            marks:"55",
          },{
            name:"ramya",
            gender:"female",
            marks:"75",
          },{
            name:"ajeesh",
            gender:"male",
            marks:"60",
          },{
            name:"jaison",
            gender:"male",
            marks:"65",
          },{
            name:"megha",
            gender:"female",
            marks:"49",
          },{
            name:"thinushiya",
            gender:"female",
            marks:"80",
          },{
            name:"raja",
            gender:"male",
            marks:"35",
          },{
            name:"kumar",
            gender:"male",
            marks:"40",
          },{
            name:"rose",
            gender:"female",
            marks:"75",
          },
          {
            name:"smith",
            gender:"male",
            marks:"90",
          },{
            name:"warner",
            gender:"male",
            marks:"80",
          },{
            name:"harleen deol",
            gender:"female",
            marks:"50",
          },{
            name:"mithali",
            gender:"female",
            marks:"85",
          },{
            name:"dhoni",
            gender:"male",
            marks:"99",
          },
          ] 

          this.state={list:this.studentsList}
          this.name=""
     
          this.handlechange = this.handleChange.bind(this)
          this.handleremove = this.handleRemove.bind(this)
    }

    handleChange(e){
        this.name=e.target.value
        console.log(this.name)
    }
    
    handleRemove(name){
        console.log("name",name)
        this.studentname=name
        this.removename=this.state.list.filter((el)=>el.name !== this.studentname)
        console.log(this.removename)
        this.setState({list:this.removename})
        
    }
    render(){
        return(
            <>
            <div className="cards">
            <center>
            <input type="text" placeholder="enter name" name="name" onChange={this.handlechange}/>&nbsp;&nbsp;
            <button onClick={()=>this.handleremove(this.name)}>remove</button><br/><br/>

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
                    {this.state.list.map((value,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{value.name}</td>
                                <td>{value.gender}</td>
                                <td>{value.marks}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </center>
            </div>
            </>
        )
    }
}
export default Remove;