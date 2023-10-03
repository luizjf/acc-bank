import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/style_constants/formPage.css';
import '../styles/style_constants/requestBank.css';

import form_img from '../images/graphic_bank.jpg';

import { formFields } from "./formFields";
import CancelForm from "./subcontants/cancelForm";

export default function FormPage(){

    const navigate = useNavigate();

    const handleThxRequest = () => {
      navigate('/thanks-for-request');
    };

    return(
        <div className="form-container" id="myForm">
            <form className="form" id="myForm">

            <h1>Request your ACCBank account</h1>

            <div className="form-grid">
                {formFields.map((field, index) => (
                        <div key={index} className="form-field">
                            <label>
                                <p>{field.label}:</p>
                                {field.type === "select" ? (
                                    <select name={field.name}>
                                        {field.options.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input type={field.type} name={field.name} />
                                )}
                            </label>
                        </div>
                    ))}
            </div>

                <button className="btn-form" type="submit" onClick={handleThxRequest}>Send</button>

                <CancelForm />
            </form>


            <section className="form-welcome">
                <div className="wlc_accbank">
                    <div className="wlc_text">
                        <h1>Welcome to ACCBank</h1>
                        <p>Take your financial life to the next level with ACCBank.
                            Your trusted partner for prosperity and security.</p>
                    </div>

                    <img src={form_img} alt="form_img"></img>
                </div>
            </section>
        </div>
    )
}