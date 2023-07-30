//Validate phone number
const phoneRegex = /^\+\d{12}$/
// const phoneValidator = (phone: string): boolean => phoneRegex.test(phone);

//validate email
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// const emailValidator = (email: string): boolean => emailRegex.test(email);

//validate unique name
const uniqueNameRegex = /^[A-Za-z0-9_-]{1,}$/;

//error message function
const errorMessage = (props: {value:string}, msg:string) => {
    return `${props.value} ${msg}`; 
}
export { emailRegex, phoneRegex, errorMessage, uniqueNameRegex};