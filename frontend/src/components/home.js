import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../common/navbar"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3>Home Page</h3>
                </div>
            </div>
        )
    }
}

export default Home
