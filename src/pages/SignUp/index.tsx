import { Card, Checkbox, Input, Typography } from "@imagine-ui/react";
import { Link } from "react-router-dom";
import { useSignUpPage } from "../../hooks/useSignUpPage";
import { TaskButton } from "../../components/TaskButton";

export function SignUp() {
  const { formikProps, mutationSignIn } = useSignUpPage();
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <Card className="p-8 gap-4 flex items-center justify-center  flex-col  max-w-[400px] max-h-[500px]">
        <div className="flex flex-col items-center ">
          <Typography variant="h6">Sign Up</Typography>
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
            error={Boolean(formikProps.errors.name && formikProps.touched.name)}
            label="Name"
            name="name"
            onChange={formikProps.handleChange}
          />
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
          <Input
            error={Boolean(
              formikProps.errors.confirmPassword &&
                formikProps.touched.confirmPassword,
            )}
            label="Confirm Password"
            name="confirmPassword"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            type="password"
          />
          <div className="flex items-center w-full -mt-4 -mb-4 -ml-5">
            <Checkbox
              checked={formikProps.values.agreeTerms}
              onChange={(e) =>
                formikProps.setFieldValue("agreeTerms", e.target.checked)
              }
            />
            <Typography variant="small" color="gray">
              Agree the terms
            </Typography>
          </div>
          <TaskButton
            className="w-full"
            type="submit"
            isLoading={mutationSignIn.isLoading}
          >
            Sign up
          </TaskButton>
          <Typography variant="small" color="red">
            {(formikProps.errors.email &&
              formikProps.touched.email &&
              formikProps.errors.email) ||
              (formikProps.errors.name &&
                formikProps.touched.name &&
                formikProps.errors.name) ||
              (formikProps.errors.password &&
                formikProps.touched.password &&
                formikProps.errors.password) ||
              (formikProps.errors.confirmPassword &&
                formikProps.touched.confirmPassword &&
                formikProps.errors.confirmPassword) ||
              (formikProps.errors.agreeTerms &&
                formikProps.touched.agreeTerms &&
                formikProps.errors.agreeTerms) ||
              ""}
          </Typography>
        </form>
        <div className="mt-5">
          <Typography variant="small" color="gray">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/login">
              Log In
            </Link>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
