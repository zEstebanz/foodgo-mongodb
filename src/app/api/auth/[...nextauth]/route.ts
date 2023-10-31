import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs'

const handler = NextAuth({
    //de los provider, quiero usar credential
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "*****" },
            },
            async authorize(credentials, req) {
                await connectDB()
                console.log(credentials)

                //Vas a recibir un valor, y buscaras por correo, si la credencial e sigual entonces existe
                const userFound = await User.findOne({email: credentials?.email,
                }).select("+password");

                if(!userFound) throw new Error("Invalid credentials");
                const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password);
                if(!passwordMatch) throw new Error("Invalided credentials");
                return userFound;
            },
        }),
    ],

    callbacks: {
        jwt({ account, token, user, profile, session }) {
            if (user) token.user = user;
            console.log(token)
            return token;
        },
        //session recibira los datos guardados
        session({session, token}) {

            //session en su propiedad sera igual lo que estara dentro del token de user.
            session.user = token.user as any;
            console.log(session, token);
            return session
        },
    },
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };