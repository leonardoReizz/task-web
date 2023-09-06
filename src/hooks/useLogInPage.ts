import { useFormik } from "formik";
import { useMutation } from "react-query";
import * as Yup from "yup";
import { apiRequest } from "../http/methods";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const initialValues = {
  email: "",
  password: "",
};

export function useLogInPage() {
  const navigate = useNavigate();

  const mutationLogIn = useMutation({
    mutationFn: (values: typeof initialValues) => {
      return apiRequest.logIn(values);
    },
    onSuccess: (response) => {
      const date = new Date();
      date.setHours(date.getHours() + 1);
      const tokenExpireDate = date;
      date.setHours(date.getHours() + 7);
      const refreshTokenExpireDate = date;

      Cookies.set("token", JSON.stringify(response.data.token), {
        expires: tokenExpireDate,
      });

      Cookies.set("refreshToken", JSON.stringify(response.data.refreshToken), {
        expires: refreshTokenExpireDate,
      });
      navigate("/");
    },
    onError: () => {},
  });

  const validationSchema = Yup.object({}).shape({
    email: Yup.string().email().min(5).max(100),
    password: Yup.string().required().min(8).max(32),
  });

  const formikProps = useFormik({
    initialValues,
    onSubmit: (values) => mutationLogIn.mutate(values),
    validationSchema,
  });

  return { formikProps, mutationLogIn };
}
