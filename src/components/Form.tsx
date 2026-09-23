import { useState } from "react";

type FormInputType = {
    idx: string,
    label: string,
    value: string,
}

function FormInput({idx, label, value, onChange, validationRules}){
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

function ValidationRulesOutput({validationRules, value}){
    
    let validationMsgs = "";
    validationMsgs += validationRules.map((v,i,a)=>{
        if(v.rule(value)){
            return(" "+v.msg);
        }
    });
    return <div className="text-danger">{validationMsgs}</div>;
}


function Form(){

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");

    const validationRulesDefault = [
        {
            rule: (value:string)=>{return(value=="");},
            msg:  "Pole nie może być puste!",
            value: true,
        },
        {
            rule: (value:string)=>{return(value.length<3 || value.length>10);},
            msg: "Pole musi zawierać od 3 do 10 znaków!",
            value: true,
        }
    ]

    let [validationRules, setValidationRules] = useState(validationRulesDefault);


    function formReset(){
        setLink("");
        setLabel("");
        setValidationRules(validationRulesDefault);
    }


    return (
        <form>
            <FormInput 
                idx={"link"} 
                label={"Odnośnik"} 
                onChange={(e:any)=>{setLink(e.target.value)}}
                value={link}     
                validationRules={validationRules}
            />
            <FormInput 
                idx={"label"} 
                label={"Opis"}
                onChange={(e:any)=>{setLabel(e.target.value)}}
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