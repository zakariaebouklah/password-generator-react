import React from 'react';
import {IoMdClipboard} from "react-icons/io";

function Form(props) {
    return (
        <form id="pg-form" className="form">

            <div className="result">
                <div>
                    <input className="input" type="text" placeholder="Minimum length of password is 7 characters" readOnly={true}/>
                </div>
                <div className="ic-clip-board">
                    <IoMdClipboard size={35}/>
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Length of password</label>
                <input className="input-number" type="number" min={7} max={17}/>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Capital</label>
                <input className="input-checkbox" type="checkbox"/>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Small</label>
                <input className="input-checkbox" type="checkbox"/>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Number</label>
                <input className="input-checkbox" type="checkbox"/>
            </div>

            <div className="field">
                <label className="label" htmlFor="length">Symbol</label>
                <input className="input-checkbox" type="checkbox"/>
            </div>

            <button className="btn" type="submit">Generate</button>

        </form>
    );
}

export default Form;