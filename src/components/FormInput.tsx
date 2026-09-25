import type { ValidationRuleType } from "./Form";
import { ValidationRules } from "./ValidationRules";

type FormInputType = {
    idx: string,
    label: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    validationRules: ValidationRuleType[]
}

function FormInput({idx, label, value, onChange, validationRules}:FormInputType){
    return(
    <>
        <div className={"d-flex p-2 align-items-center"}>
            <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
            <input className={"form-control"} id={idx} name={idx} value={value} onChange={onChange}/>
        </div>
        <ValidationRules validationRules={validationRules} value={value}/>
    </>
    )
}

export {FormInput};