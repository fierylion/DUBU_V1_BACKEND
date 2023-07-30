//interface ifield contains variety of fields ie firstname lastname email password etc
interface IField{
    [key:string]:string|number|boolean
}
export const messageForEmptyFields = (fields:IField)=>{
    let message = ''
    for(let field in fields){
     if(!fields[field])
        message+=`${field} cannot be empty. `;
    }
    return message
}