import { users } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,par) {

    const Singledata = users.filter((item)=> item.id == par.params.id)

    if(Singledata.length === 0){
        return NextResponse.json({message:"No Data Found"},{state:404})
    }
  return  NextResponse.json(Singledata)
}
