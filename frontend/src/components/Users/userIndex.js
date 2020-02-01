import React, { Component } from 'react'

import Navbar from "../../common/navbar"
import UsersApi from "../../api/users"

export class UserIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            loading: true
        }
    }

    async componentDidMount(){
        try{
            const res = await UsersApi.index()
            // console.log(res)
            this.setState({
                users:res.data.users
            })
        }catch(err){

        }
    }

    render() {
        const userList = this.state.users.map( (user, index) => {
            // console.log(user.username)
            return <tr key={index} >
                <th scope="row">{++index}</th>
                <td>{user.username}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.createdAt}</td>
                <td>
                    <button className="btn btn-info">View</button>
                    <button className="btn btn-warning ml-1">Edit</button>
                    <button className="btn btn-danger ml-1">Delete</button>
                </td>
            </tr>;
        })

        return (
            <div>
                <Navbar />
                
                <div className="container">

                    <blockquote className="blockquote mt-5">
                        <p>User List</p>
                    </blockquote>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Fistname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Created</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserIndex
