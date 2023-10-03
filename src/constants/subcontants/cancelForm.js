import React from "react";
import { useNavigate } from "react-router-dom";


export default function CancelForm(){
    
    const navigate = useNavigate();
    
    const handleCancel = () => {
        navigate('/');
    };

    return(
        <div className="form_cancel" onClick={handleCancel}></div>
    )
};