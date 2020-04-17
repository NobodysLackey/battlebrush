import React, {Component} from 'react';
import { SwatchesPicker } from 'react-color';
import './UpdatePaintPage.css';

class UpdatePaintPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.paint,
    idx: this.props.location.idx
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePaint(this.state.formData, this.state.idx, this.props.location.state.paint._id);
  };

  handleChange = e => {
    if(e.target.name === 'isOwned'){
      e.target.value = !this.state.formData.isOwned
    } 
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <div className="title">
          <h2>Update "{this.state.formData.colorName}"</h2>
        </div>
        <center>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
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
              <SwatchesPicker
                color= {this.state.color}
                onChangeComplete = {this.handleChangeComplete}
                width = {220}
                height = {150}
              />
            <br></br><br></br><br></br>
            <label>Type</label>
            <br></br><br></br>
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
            <br></br><br></br><br></br>
            <label>In Collection?</label>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              className="form-control"
              name="isOwned"
              checked={this.state.formData.isOwned}
              value={this.state.formData.isOwned}
              onChange={this.handleChange}
            />
            <br></br><br></br><br></br>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              SAVE
            </button>
          </form>
          <br></br>
          <form
            action="/paintlist"
          >
            <input
              type="submit"
              value="CANCEL"
              className="btn"
            >
            </input>
          </form>
        </center>
      </>
    );
  }
}

export default UpdatePaintPage;
