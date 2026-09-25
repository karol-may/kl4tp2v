type ValidationRuleType = {
    rule: (value: string)=>{},
    msg: string
}

type ValidationRulesOutputType = {
    validationRules: ValidationRuleType[],
    value: string,
}

function ValidationRulesOutput({validationRules, value}:ValidationRulesOutputType){
    
    let validationMsgs = "";
    validationMsgs += validationRules.map((v:ValidationRuleType)=>{
        if(v.rule(value)){
            return(" "+v.msg);
        }
    });
    return <div className="text-danger">{validationMsgs}</div>;
}

export {ValidationRulesOutput}