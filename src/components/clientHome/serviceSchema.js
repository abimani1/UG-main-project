import * as Yup from "yup"

export const servicesSchema=Yup.object({
    serviceRequird:Yup.string().required(),
    name:Yup.string().min(3).max(50).required("Please enter yor name"),
    email:Yup.string().email().required("please enter your email"),
    moblie:Yup.number().required("Enter the 10-digit Moblie number"),
    description:Yup.string().required("Enter the description of the require")
})