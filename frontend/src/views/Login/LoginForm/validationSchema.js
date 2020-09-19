import * as Yup from "yup";

export default Yup.object({
  email: Yup
    .string()
    .email("Digite um email válido")
    .required("Campo Obrigatório!"),
  password: Yup
    .string()
    .required("Campo Obrigatório!"),
});
