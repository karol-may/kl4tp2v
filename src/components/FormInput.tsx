import { ValidationRulesOutput } from "./ValidationRulesOutput";

function FormInput({idx, label, value, onChange, validationRules}:FormInputType){
    return(
    <>
        <div className={"d-flex p-2 align-items-center"}>
            <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
            <input className={"form-control"} id={idx} name={idx} value={value} onChange={onChange}/>
        </div>
        <ValidationRulesOutput validationRules={validationRules} value={value}/>
    </>
    )
}

export {FormInput};