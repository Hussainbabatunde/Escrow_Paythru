import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import StaffLogin from "./staffLogin";


const HRLogin= ()=>{

    const [shown, setShown] = useState(1)

    const nextStep = ()=>{
        setShown(2)
    }
    const prevStep = ()=>{
        setShown(1)
    }
    switch (shown){
        case 1:
            return(
                <StaffLogin nextStep={nextStep} />
            )
        case 2:
            return(
                <AdminLogin prevStep={prevStep} />
            )
    }

}

export default HRLogin;