"use client";
import { registerUser } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export type UserData = {
    username: string;
    email: string;
    password: string;
};

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserData>();
    console.log(errors);
    const router = useRouter();

    const onSubmit = async (data: UserData) => {
        try {
            const res = await registerUser(data);
            if (res.success) {
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    text: res.message,
                    confirmButtonColor: "#F95353",
                }).then(() => {
                    router.push("/login");
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: res.message || "Something went wrong, please try again.",
                    confirmButtonColor: "#F95353",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to register. Please try again later.",
                confirmButtonColor: "#F95353",
            });
            console.log(error);
        }
    };

    return (
        <div className="my-10 w-[90%] min-h-screen mx-auto flex items-center justify-center">
            <div className="md:w-[40%] w-full bg-[#1b172e] shadow-2xl p-8 rounded-lg border border-[#292148]">
                <h1 className="text-center text-4xl mb-6 font-bold text-[#F95353]">
                    Register <span className="text-white">Now</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            {...register("username")}
                            placeholder="Enter your full name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-500 text-white bg-[#1e1b2d] rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-[#F95353] focus:border-[#F95353]"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-500 text-white bg-[#1e1b2d] rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-[#F95353] focus:border-[#F95353]"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
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
                            Register
                        </button>
                    </div>
                </form>

                <p className="text-center mt-4 text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#F95353] hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
