import { Card, Input, Typography } from "@imagine-ui/react";
import { Link } from "react-router-dom";
import { TaskButton } from "../../components/TaskButton";
import { useLogInPage } from "../../hooks/useLogInPage";

export function LogIn() {
  const { formikProps, mutationLogIn } = useLogInPage();
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <Card className="p-8 gap-4 flex items-center justify-center  flex-col  max-w-[400px] max-h-[500px]">
        <div className="flex flex-col items-center ">
          <Typography variant="h6">Log In</Typography>
          <Typography variant="small" align="center" color="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            nisi temporibus{" "}
          </Typography>
        </div>
        <form
          onSubmit={formikProps.handleSubmit}
          className="flex flex-col items-center justify-center w-full gap-4"
        >
          <Input
            error={Boolean(
              formikProps.errors.email && formikProps.touched.email,
            )}
            label="Email"
            name="email"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
          />
          <Input
            error={Boolean(
              formikProps.errors.password && formikProps.touched.password,
            )}
            label="Password"
            name="password"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            type="password"
          />
          <TaskButton
            className="w-full"
            type="submit"
            isLoading={mutationLogIn.isLoading}
          >
            Log In
          </TaskButton>
          <Typography variant="small" color="red">
            {(formikProps.errors.email &&
              formikProps.touched.email &&
              formikProps.errors.email) ||
              (formikProps.errors.password &&
                formikProps.touched.password &&
                formikProps.errors.password) ||
              ""}
          </Typography>
        </form>
        <div className="mt-5">
          <Typography variant="small" color="gray">
            Don&apos;t have account?{" "}
            <Link className="text-blue-500 hover:underline" to="/login">
              Sign In
            </Link>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
