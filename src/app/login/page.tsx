"use client";
import { loginUser } from "@/utils/actions/loginUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  console.log(errors);
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const res = await loginUser(data);
    if (res.accessToken) {
      localStorage.setItem("accessToken", res.accessToken);
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: res.message,
        confirmButtonColor: "#F95353",
      }).then(() => {
        router.push("/");
        setTimeout(() => {
          location.reload();
        }, 3000);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: res.message || "Invalid credentials. Please try again.",
        confirmButtonColor: "#F95353",
      });
    }
  };

  return (
    <div className="my-10 w-[90%] min-h-screen mx-auto flex items-center justify-center">
      <div className="md:w-[40%] w-full bg-[#1b172e] shadow-2xl p-8 rounded-lg border border-[#292148]">
        <h1 className="text-center text-4xl mb-6 font-bold text-[#F95353]">
          Login <span className="text-white">Here</span>
        </h1>
        <Helmet>
                <meta charSet="utf-8" />
                <title>ProView | Login</title>
            </Helmet>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-500 text-white bg-[#1e1b2d] rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-[#F95353] focus:border-[#F95353]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-500 text-white bg-[#1e1b2d] rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-[#F95353] focus:border-[#F95353]"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full border border-[#F95353] text-[#F95353] font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#F95353] hover:text-white transition"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#F95353] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
