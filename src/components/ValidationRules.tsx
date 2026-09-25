type ValidationRuleType = {
    rule: (value: string)=>{},
    msg: string
}

type ValidationRulesType = {
    validationRules: ValidationRuleType[],
    value: string,
}

function ValidationRules({validationRules, value}:ValidationRulesType){
    
    let validationMsgs = "";
    validationMsgs += validationRules.map((v:ValidationRuleType)=>{
        if(v.rule(value)){
            return(" "+v.msg);
        }
    });
    return <div className="text-danger">{validationMsgs}</div>;
}

export {ValidationRules}