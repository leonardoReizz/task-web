import { useFormik } from "formik";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { apiRequest } from "../http/methods";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  agreeTerms: false,
  password: "",
  confirmPassword: "",
};

export function useSignUpPage() {
  const navigate = useNavigate();
  const mutationSignIn = useMutation({
    mutationFn: (values: typeof initialValues) => {
      return apiRequest.createAccount(values);
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 400) {
        formikProps.setFieldError("email", "Email Already Exist");
      }
    },
  });

  const validationSchema = Yup.object({}).shape({
    name: Yup.string().min(5).max(100),
    email: Yup.string().email().min(5).max(100),
    agreeTerms: Yup.boolean().isTrue(),
    password: Yup.string().required().min(8).max(32),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formikProps = useFormik({
    initialValues,
    onSubmit: (values) => mutationSignIn.mutate(values),
    validationSchema,
  });

  return { formikProps, mutationSignIn };
}
