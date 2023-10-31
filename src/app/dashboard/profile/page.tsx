"use client";

import { useSession, signOut } from "next-auth/react";

function DashboardPage() {
    const { data: session, status } = useSession();

    return (
        <section className="h-screen">
            <h1 className="text-white text-center text-6xl mb-8 font-bold pt-10">PERFIL</h1>

            <div className="text-white flex flex-col items-center lg:h-[calc(100vh-4rem)] gap-y-5 p-4">

                {status === "authenticated" ? (
                    <div className="flex items-center justify-center">
                        <div className="bg-black shadow-lg rounded-lg p-4 max-w-sm mx-auto text-center">
                            <img src="https://play-lh.googleusercontent.com/L1w4leiEGjZS-CAV7zJV1Vfn8xDAO-V_UC2CZzBC2vUt722KYw7i8KqPJKyhWpvbZw" alt="Foto de perfil" className="w-16 h-16 rounded-full mx-auto mb-4 border border-white" />
                            <h2 className="text-xl font-semibold">Name: {session.user.fullname}</h2>
                            <h2 className="text-xl font-semibold">Email: {session.user.email}</h2>
                            <button className="buttonCustom block py-2 pl-3 pr-4 text-white rounded rounded-lg mx-auto block mt-5" onClick={() => { signOut(); }}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>Not authenticated</p>
                )}


            </div>



        </section>



    );
}

export default DashboardPage;