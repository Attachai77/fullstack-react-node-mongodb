import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3>Home Page</h3>

                    
                    <Link to="/register" className="btn btn-warning">Register</Link>
                </div>
            </div>
        )
    }
}

export default Home
