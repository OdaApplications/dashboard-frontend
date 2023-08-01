import * as SC from "./Login.styled";
import { useFormik } from "formik";
import { useLoginMutation } from "redux/auth/authAPI";
import { useNavigate } from "react-router-dom";
import { LoaderBig } from "components/Loader";

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await login(values).unwrap();
        navigate("/metrica/home/all");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <SC.LoginWrapper>
      <SC.AuthTitle>Вхід</SC.AuthTitle>
      <SC.LoginForm onSubmit={formik.handleSubmit}>
        <SC.LoginInput
          id="login"
          name="login"
          type="text"
          placeholder="Логін"
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        <SC.LoginInput
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <SC.LoginButton type="submit">Увійти</SC.LoginButton>
      </SC.LoginForm>
      {isLoading && <LoaderBig />}
    </SC.LoginWrapper>
  );
};
