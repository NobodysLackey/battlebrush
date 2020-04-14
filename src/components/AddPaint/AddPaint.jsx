import React, { Component } from 'react';
import './AddPaint.css';

class AddPaint extends Component {
    state = {
        formData: {
            colorName: '',
            paintType: '',
            isOwned: false
        }
    }

    handleChange = e => {
        if(e.target.name === 'isOwned'){
            e.target.value = !this.state.formData.isOwned
        }this.setState({
            formData: {...this.state.formData, [e.target.name]:e.target.value}
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddPaint(this.state.formData)
    }

    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
            >
                <span>Paint Color</span>
                <br></br>
                <input
                    className="input-field"
                    type="text"
                    name="colorName"
                    value={this.state.formData.colorName}
                    onChange={this.handleChange}
                />
                <br></br><br></br>
                <span>Paint Type</span>
                <br></br>
                <input
                    className="input-field"
                    type="text"
                    name="paintType"
                    value={this.state.formData.paintType}
                    onChange={this.handleChange}
                />
                <br></br><br></br>
                <span>Have it?</span>
                <br></br>
                <input
                    type="checkbox"
                    name="isOwned"
                    value={this.state.formData.isOwned}
                    onChange={this.handleChange}
                />
                <br></br><br></br>
                <input
                    type="submit"
                    value="Add"
                />
            </form>
        )
    }
}

export default AddPaint;