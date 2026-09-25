import { useState } from "react";
import { FormInput } from "./FormInput";


type FormInputType = {
    idx: string,
    label: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    validationRules: ValidationRuleType[]
}


function Form(){

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");



    let validationRules : ValidationRuleType[] = [
        {
            rule: (value)=>{return(value=="");},
            msg:  "Pole nie może być puste!",
        },
        {
            rule: (value)=>{return(value.length<3 || value.length>10);},
            msg: "Pole musi zawierać od 3 do 10 znaków!",
        }
    ]



    function formReset(){
        setLink("");
        setLabel("");
    }


    return (
        <form>
            <FormInput 
                idx={"link"} 
                label={"Odnośnik"} 
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setLink(e.target.value)}}
                value={link}     
                validationRules={validationRules}
            />
            <FormInput 
                idx={"label"} 
                label={"Opis"}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setLabel(e.target.value)}}
                value={label}
                validationRules={validationRules}
            />
            <div className={"d-flex justify-content-around"}>
                <button className={"btn btn-primary"}>Dodaj</button>                
                <button onClick={(e)=>{e.preventDefault();formReset()}} className={"btn btn-danger"}>Reset</button>
            </div>
            <pre>
                Link: {link}<br/>
                Label: {label}
            </pre>
        </form>
    );
}

export default Form;