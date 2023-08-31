import * as yup from "yup";

export function initialValues(){
    return{
        email:"",
        password:"",
        repeatPassword:"",
    };
}

export function validationSchema(){
    return yup.object({
        email: yup.string()
         .email("el email no es correcto")
         .required("El email es obligatorio"),
        password: yup.string().required("La constraseña es obligatoria"),
        repeatPassword:yup.string().required("La constraseña es obligatoria")
         .oneOf([yup.ref("password")], "las contraseñas deben ser iguales"),
    });
}