import * as Yup from "yup";

export function initialValues(){
    return{
        password:"",
        newPassword:"",
        confirmedNewPassword:"",
    };
}

export function validationSchema(){
    return Yup.object({
        password: Yup.string().required("Este campo es obligatorio"),
        newPassword: Yup.string().required("Este campo es obligatorio"),
        confirmedNewPassword: 
            Yup.string()
            .required("Este campo es obligatorio")
            .oneOf([Yup.ref("newPassword"),"las contraseñas deben ser iguales"])
    }) 
}