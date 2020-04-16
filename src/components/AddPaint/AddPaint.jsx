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
                    autoComplete="off"
                />
                <br></br><br></br>
                <span>Paint Type</span>
                <br></br>
                <select
                    className="input-field"
                    type="text"
                    name="paintType"
                    value={this.state.formData.paintType}
                    onChange={this.handleChange}
                >
                    <option>-</option>
                    <option>Base</option>
                    <option>Shade</option>
                    <option>Layer</option>
                    <option>Edge</option>
                    <option>Glaze</option>
                    <option>Technical</option>
                </select>
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