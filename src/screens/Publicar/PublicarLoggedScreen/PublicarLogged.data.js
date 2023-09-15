import * as Yup from "yup";

export function initialValues() {
  return {
    Origen: "",
    Destino: "",
    Fecha: "",
    HorarioDeSalida: "",
    Lugares: 1,
    Precio: 0,
    Descripcion: "",
  };
}

export function validationSchema() {
  return Yup.object({
    Origen: Yup.string().required("Campo obligatorio"),
    Destino: Yup.string().required("Campo obligatorio"),
    Fecha: Yup.string().required("Campo obligatorio"),
    HorarioDeSalida: Yup.string().required("Campo obligatorio"),
    Descripcion: Yup.string(),
    Lugares: Yup.number().required("Seleccione una opción"),
    Precio: Yup.number()
      .min(0, "El precio no puede ser negativo")
      .required("Campo obligatorio"),
  });
}
