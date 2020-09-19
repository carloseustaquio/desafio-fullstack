import * as Yup from "yup";

export const removeMask = value => value.replace(/\.|-|_| |\(|\)/g, "")

export default Yup.object({
  firstName: Yup.string().required("Campo Obrigatório!"),
  secondName: Yup.string().required("Campo Obrigatório!"),
  email: Yup.string().required("Campo Obrigatório!"),
  phone: Yup
    .string()
    .transform(
      (value, originalValue) => originalValue && removeMask(value)
    )
    .min(10, "Digite um número válido"),
  password: Yup
    .string()
    .required("Campo Obrigatório!"),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.'),
});
