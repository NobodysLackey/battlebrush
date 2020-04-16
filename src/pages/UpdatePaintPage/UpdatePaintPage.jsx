import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
        <h3>Update Your Paint</h3>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Paint Color</label>
            <input
                className="form-control"
                name="colorName"
                value={this.state.formData.colorName}
                onChange={this.handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label>Paint Type</label>
            <input
                className="form-control"
                name="paintType"
                value={this.state.formData.paintType}
                onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>In Your Collection?</label>
            <input
                type="checkbox"
                className="form-control"
                name="isOwned"
                checked={this.state.formData.isOwned}
                value={this.state.formData.isOwned}
                onChange={this.handleChange}
            />
          </div>
          <button
                type="submit"
                className="btn"
                disabled={this.state.invalidForm}
          >
            SAVE
          </button>&nbsp;&nbsp;
          <Link to='/paintlist'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default UpdatePaintPage;
