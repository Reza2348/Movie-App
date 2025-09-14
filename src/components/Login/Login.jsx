import { useForm } from "react-hook-form";
import { z } from "zod";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Validet = z.object({
    email: z.email({ message: "yor password  should be more" }),
    password: z
      .string()
      .min(3, { message: "yor password  should be more" })
      .max(20),
  });

  function submitForm({ Username, Password, Email }) {
    console.log(Username, Password, Email);
  }
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className=" text-center mt-9 border rounded-lg px-2 py-2 mr-5 ml-5 bg-teal-400"
    >
      <h2>Create An Account</h2>
      <p>
        Create an account to enjoy all the services without any ads for free!
      </p>
      <input
        {...register("Username")}
        className=" border rounded-lg px-2 py-2 mb-2.5 mr-2.5 mt-2 bg-white"
        type="eamil"
        placeholder="Username"
      />
      <input
        {...register("Email")}
        className=" border rounded-lg px-2 py-2 mb-2.5 mr-2.5 mt-2 bg-white"
        type="eamil"
        placeholder="Email Address"
      />
      <input
        {...register("Password")}
        className=" border rounded-lg px-2 py-2 mr-2.5 mt-2 bg-white"
        type="Password"
        placeholder="Password"
      />
      <button className=" border rounded-lg px-2 py-2 ml-2 mt-3  bg-white">
        Create Account
      </button>
      <span className=" flex text-center justify-center">
        Already Have An Account?
        <a href="#" className="text-blue-300 ml-2">
          Sign In
        </a>
      </span>
    </form>
  );
};

export default Login;
