"use server";

import { connectDB } from "@/lib/connectDB";
import { getFormData } from "@/lib/getFormData";
import User from "@/lib/Model/User";
import { SignJWT } from "jose";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Login Operation
export async function LoginForm(formData) {
	const { email, password } = getFormData(formData, "email", "password");
	console.log(email, password);
	try {
		const db = await connectDB();

		const user = await User.findOne({ email: email, password: password });
		if (!user) {
			return { success: false };
		}


		const secret = new TextEncoder().encode(process.env.SECRET_JWT);
		const token = await new SignJWT({ email: user.email })
			.setProtectedHeader({ alg: "HS256" }) // Set the algorithm (HS256 in this case)
			.setIssuedAt() // Set the issued at timestamp
			.setExpirationTime("7d") // Set the expiration time (e.g., 1 hour)
			.sign(secret);


		// cookies().set("token", token, {
		// 	httpOnly: true,
		// 	secure: true,
		// 	expires: 60 * 60 * 24 * 30,
		// 	sameSite: "lax",
		// 	path: "/",
		// });

        cookies().set("token", token)


	} catch (error) {
		console.log(error);
		return {
			success: false,
		};
	}

	redirect("/admin/view-blogs");
}


 
export async function LogoutForm() {
  cookies().delete('token');
  redirect('/login');
}