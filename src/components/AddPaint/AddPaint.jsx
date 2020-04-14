import React, { Component } from 'react';
import './AddPaint.css';

class AddPaint extends Component {
    state = {
        formData: {

        }
    }

    render() {
        return (
            <form>
                <span>Paint Color</span>
                <br></br>
                <input
                    type="text"
                    name=""
                />
                <br></br><br></br>
                <span>Paint Type</span>
                <br></br>
                <input
                    type="text"
                    name=""
                />
                <br></br><br></br>
                <span>Have it?</span>
                <br></br>
                <input
                    type="checkbox"
                    name=""
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