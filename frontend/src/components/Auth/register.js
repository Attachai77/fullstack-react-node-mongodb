import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import Auth from "../../api/auth"
import Auth from '../../api/auth'

class register extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    async componentDidMount(){
        // console.log("componentDidMount")
        const users = await Auth.register()
        console.log(users)
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
                                    <form className="">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter firstname" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Lastname" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <Link to="/login" className="btn btn-danger">Login</Link>
                                        <button type="submit" className="btn btn-primary float-right">Register</button>
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
