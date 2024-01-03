import { users } from "@/lib/db";

export const GET = async(req)=>{
    try {
        const id = req.url.split("users/")[1];
        console.log(id);
        console.log(users)
    } catch (error) {
        console.log();
    }
}