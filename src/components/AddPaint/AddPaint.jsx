import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import './AddPaint.css';

class AddPaint extends Component {
    state = {
        formData: {
            colorName: '',
            paintType: '',
            isOwned: false,
        },
        displayColorPicker: false,
        color: {
            r: '',
            g: '',
            b: '',
            a: ''
        }
    };

    handleChange = (e) => {
        if(e.target.name === 'isOwned'){
            e.target.value = !this.state.formData.isOwned
        }this.setState({
            formData: {...this.state.formData,[e.target.name]:e.target.value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddPaint(this.state.formData)
    }

    handleClick = () => {
        this.setState({ 
            displayColorPicker: !this.state.displayColorPicker
        })
      };
    
    handleClose = () => {
        this.setState({
            displayColorPicker: false
        })
    };

    handleColorChange = (color) => {
        this.setState({
            color: color.rgb
        })
    };
    

    render() {
        const styles = reactCSS({
            'default': {
              color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });

        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
            >
                <span>Paint Name</span>
                <br></br><br></br>
                <input
                    className="input-field"
                    type="text"
                    name="colorName"
                    value={this.state.formData.colorName}
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <br></br><br></br><br></br>
                <span>Color</span>
                <br></br><br></br>
                <div>
                    <div
                        style={ styles.swatch }
                        onClick={ this.handleClick }
                    >
                    <div 
                        style={ styles.color }
                    />
                    </div>
                    { this.state.displayColorPicker ? 
                        <div
                            style={ styles.popover }
                        >
                        <div 
                            style={ styles.cover }
                            onClick={ this.handleClose }
                        />
                        <SketchPicker
                            color={ this.state.color } onChange={ this.handleColorChange }
                        />
                        </div> 
                    : 
                        null
                    }
                </div>
                <br></br><br></br><br></br>
                <span>Type</span>
                <br></br><br></br>
                <select
                    className="input-field"
                    type="text"
                    name="paintType"
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
                <br></br><br></br><br></br>
                <span>In Collection?</span>&nbsp;&nbsp;
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
