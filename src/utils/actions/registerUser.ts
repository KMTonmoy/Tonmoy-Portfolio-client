"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (data: UserData) => {
    const res = await fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
    });
    const userInfo = await res.json();
    return userInfo;
};