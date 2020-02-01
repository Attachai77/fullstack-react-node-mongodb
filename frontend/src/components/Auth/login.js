import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Auth from "../../api/auth"

class login extends Component {
    constructor(props){
        super(props)
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async handleSubmit(e){
        e.preventDefault()
        const { username, password } = this.state
        const payload = { username, password }
        try{
            const response = await Auth.login(payload)
            const {data, status} = response
            // console.log(response)
            if(status === 200 && data.success){
                await Auth.afterLoginedIn(data)
                alert("Login successfully.")
                this.props.history.push("/home");
            }else{
                alert(data.message)
            }
        }catch(err){
            const {data, status, statusText} = err
            alert(data.message)
        }
    }

    onChange(e){
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                         name="username" onChange={this.onChange} placeholder="Enter username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"
                                         name="password" onChange={this.onChange} placeholder="Password" />
                                    </div>
                                    <Link to="/register" className="btn btn-warning">Register</Link>
                                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login
