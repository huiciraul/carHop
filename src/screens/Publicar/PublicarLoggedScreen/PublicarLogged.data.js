import * as Yup from "yup";

export function initialValues() {
    return {
        Origen: "",
        Destino: "",
        Fecha: "",
        HorarioDeSalida:"",
        Descripcion:"",
    };
}

export function validationSchema() {
    return Yup.object({
        Origen: Yup.string().required("Campo obligatorio"),
        Destino: Yup.string().required("Campo obligatorio"),
        Fecha: Yup.string().required("Campo obligatorio"),
        HorarioDeSalida: Yup.string().required("Campo obligatorio"),
        Descripcion: Yup.string(),
    });
}
