import React from "react";
import CancelForm from "./cancelForm";


export default function RequestBank(){

    return(
        <div className="requestB">
            <div className="thx_request">
                <h1>Thank you for your request!</h1>
                <p>Your request is under review, and we will contact 
                    you shortly to inform you of the status.</p>
                <p className="color_p">Thank you for choosing ACCBank.</p>
            </div>

            <CancelForm />
        </div>
    )
}