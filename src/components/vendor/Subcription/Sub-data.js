import * as Yup from "yup"

export const paymentSchema=Yup.object({
    email:Yup.string().email().required("please enter your email"),
    cardInformation:Yup.number().required("Enter your card number"),
    month:Yup.string().min(2).max(5).required("Enter the MM/YY your card"),
    cvv:Yup.number().required("Enter the 3-digit CVV Number"),
    coundtry:Yup.string().min(4).max(50).required("Select the Country or region")    
})