import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments:'',
            Topic:''
        }
    }
    handelUserName =
        (event) => {
            this.setState({
                userName: event.target.value
            })

        }
        handelCommentsChange=(event)=>{
            this.setState({
                comments:event.target.value

            })
        }
        handelTopicChange=(event)=>{
            this.setState({
                Tpoic:event.target.value
            })
        }
        handelSubmit=event=>{
            alert(`${this.state.useName} ${this.state.comments}${this.state.tpoic}`)
            event.preventDefault()
        }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
            <div>
                <label>UserNanme</label>
                <input type='text'
                 value={this.state.userName} 
                 onChange={this.handelUserName}>

                 </input>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments}onChange={
                    this.handelCommentsChange
                }></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.tpoic}onChange={this.handelTopicChange}>
                    <option value="react">React</option>
                    <option value="Java">Java</option>
                    <option value="dotnet">DotNet</option>
                    <option value="cpp">CPP</option>
                    <option value="agular">Agular</option>

                </select>

            </div>
            <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
