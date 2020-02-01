import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
// import Auth from "../../api/auth"
import Auth from '../../api/auth'

class register extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name:"",
            last_name:"",
            username:"",
            password:""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async componentDidMount(){
        // console.log("componentDidMount")
    }

    async handleSubmit(e){
        e.preventDefault()
        const { first_name, last_name, username, password } = this.state
        const payload = { first_name, last_name, username, password }
        try{
            const response = await Auth.register(payload)
            const {data, status} = response
            // console.log(response)
            if(status === 201){
                alert(data.message)
                this.props.history.push("/home");
            }
        }catch(err){
            const {data, status, statusText} = err
            alert(data.message)
        }
    }

    onChange(e){
        let { name, value } = e.target
        // console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Register</h5>
                                    <form className="" onSubmit={this.handleSubmit} >
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="first_name"
                                            onChange={this.onChange}  placeholder="Firstname" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="last_name"
                                            onChange={this.onChange}  placeholder="Lastname" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="username"  
                                            onChange={this.onChange}  placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password"
                                            onChange={this.onChange}  placeholder="Password" />
                                        </div>
                                        <Link to="/login" className="btn btn-danger">Login</Link>
                                        <button type="submit" className="btn btn-primary float-right">
                                            Register
                                        </button>
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

export default register
