import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            authFullname: ""
        }
        this.loggout = this.loggout.bind(this)
    }

    loggout(){
        this.props.history.push("/login");
    }

    componentDidMount(){
        // alert(this.state.authFullname)
        const auth = localStorage.getItem("auth");
        if(auth){
            const { fullname } = JSON.parse(auth)    
            this.setState({
                authFullname: fullname
            })
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">MyReact</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">User List</Link>
                        </li>
                        </ul>
                        <span className="navbar-text mr-2">
                            {this.state.authFullname}
                        </span>
                        <div className="my-2 my-lg-0">
                            <button className="btn btn-outline-info my-2 my-sm-0" 
                            onClick={this.loggout}    type="button">Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)
