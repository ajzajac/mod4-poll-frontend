import React, { Component } from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'

const users = `http://localhost:3000/users`

class Signup extends React.Component{
    state = {
      username: "",
    //   image: ''
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()

    //   const formData = new FormData()
    //   formData.append(
    //     'imageFile',
    //     this.state.image
    //   )

      if(this.state.password === this.state.passwordConfirmation){
        fetch(`http://localhost:3000/signup`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            // image: this.state.image
          })
        })
          .then(res => res.json())
          .then(response => {
            if (response.errors){
              alert(response.errors)
            } else {
              this.props.setUser(response.user)
              localStorage.token = response.token
              this.props.history.push('/polls')
            }
          })
      } else {
        alert('You messed up. Try again. Get better at typing.')
      }
    }

    handleFileSelect = (event) => {
        this.setState({ 
            image: event.target.files[0]
        })
        
    }

render(){
    // console.log(this.state.image)
    return (
        <div>
            <div className="input">
                <h1>Create New User</h1>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" className='input-field' />&nbsp;&nbsp;
                {/* <input type='file' onChange={this.handleFileSelect} ></input> */}
                
                {/* <ActiveStorageProvider
                    endpoint={{
                        path: '/signup',
                        model: 'User',
                        attribute: 'image',
                        method: 'POST'
                    }}
                    onSubmit={user => this.setState({ image: user.image })}
                    render={({ handleUpload, uploads, ready }) => (
                        <div>
                            <input
                                type="file"
                                disabled={!ready}
                                onChange={e => handleUpload(e.currentTarget.files)}
                            />
                    
                            {uploads.map(upload => {
                                switch (upload.state) {
                                    case 'waiting':
                                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                                    case 'uploading':
                                    return (
                                        <p key={upload.id}>
                                        Uploading {upload.file.name}: {upload.progress}%
                                        </p>
                                    )
                                    case 'error':
                                    return (
                                        <p key={upload.id}>
                                        Error uploading {upload.file.name}: {upload.error}
                                        </p>
                                    )
                                    case 'finished':
                                    return (
                                        <p key={upload.id}>Finished uploading {upload.file.name}</p>
                                    )
                                }
                            })}
                        </div>
                    )}
                /> */}

                <button type="submit" className='input-field' >Submit</button>
                </form>
            </div>
        </div>
    );
  }
}

export default Signup;
