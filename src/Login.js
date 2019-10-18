import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(userData => {
                if (userData.jwt) {
                    console.log(userData); 
                } else {
                    console.log(userData);
                    this.setState({ errors: userData.message });
                }
            });

        // this.props.logUserIn(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChange} name="username" value={this.state.username} placeholder="Username" />
                    <input type="password" onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" />
                    <input type="submit" value="Login!" />
                </form >
            </div>
        );
    }
}



export default Login;
