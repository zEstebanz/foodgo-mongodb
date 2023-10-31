"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signup() {
    const [error, setError] = useState();
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const signupResponse = await axios.post("/api/auth/signup", {
                email: formData.get("email"),
                password: formData.get("password"),
                fullname: formData.get("fullname"),
            });
            console.log(signupResponse);
            const res = await signIn("credentials", {
                email: signupResponse.data.email,
                password: formData.get("password"),
                redirect: false,
            });

            if (res?.ok) return router.push("/");
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                const errorMessage = error.response?.data.message;
                setError(errorMessage);
            }
        }
    };

    return (
        <section className="p-8">
            <h1 className="text-center text-white text-6xl text-white font-bold">Register</h1>
            <div className="flex justify-center items-center p-4">
                <form onSubmit={handleSubmit} className="backgroundCover px-4 py-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3">
                    {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

                    <label className="text-slate-300">Fullname:</label>
                    <input
                        type="text"
                        placeholder="Fullname"
                        className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
                        name="fullname"
                    />

                    <label className="text-slate-300">Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
                        name="email"
                    />

                    <label className="text-slate-300">Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="text-white bg-zinc-800 px-2 py-1 block w-full mb-4"
                        name="password"
                    />

                    <button className="buttonCustom text-white px-2 py-1 block w-full">
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Signup;