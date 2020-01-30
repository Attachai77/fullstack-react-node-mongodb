import React, { Component } from 'react'
import { Link } from "react-router-dom";

class login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control"  placeholder="Enter username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
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
