"use server"
import { Gender } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";
import { generateAvatar } from "../utils";
export async function getDoctors() {
    try {
        const doctors = await prisma.doctor.findMany({
            include:  {
                _count:{select:{appointments:true}}
        },orderBy:{createdAt:'desc'}})
        return doctors.map((doctor)=>({
            ...doctor,
            appointmentsCount:doctor._count.appointments
        })); 
    } catch (error) {
        console.error("Error fetching doctors:", error);
        throw new Error("Could not fetch doctors");
    }
}

interface createDoctor{
    name:string;
    specialty:string;
    gender:Gender;
    email:string;
    phone:string;
    isActive:boolean;

}
export async function createDoctor(input:createDoctor){
    try {
        if(!input.name || !input.email ){
            throw new Error("Missing required fields");
        }
      const doctor =  await prisma.doctor.create({
        data:{
            ...input,imgUrl:generateAvatar(input.name,input.gender==="OTHER"?"MALE": input.gender)
        }
       })
       revalidatePath('/admin');
       return doctor
    } catch (error) {

        console.error("Error creating doctor:", error);
        throw new Error("Could not create doctor");
        
        
    }

}

interface updateDoctor extends Partial<createDoctor>{
    id:string;
}
export async function updateDoctor(input:updateDoctor){
    try {
        if(!input.email || !input.name){
            throw new Error("Missing required fields");
        }
        
        const doctor = await prisma.doctor.findUnique({
            where:{id:input.id},
            select:{email:true}

        })
        if(!doctor) throw new Error("Doctor not found");
        
        // if email is changing , make sure it's not already taken
        if(doctor.email !== input.email){
            const existingDoctor = await prisma.doctor.findUnique({
                where:{email:input.email!}
            })
            if(existingDoctor) throw new Error("Email already in use");
        }
        // ...input is going to trigger the unique constraint violation if email is changing to an existing one
        const updatedDoctor = await prisma.doctor.update({
            where:{id:input.id},
            data:{
                ...input
            }
        })
        revalidatePath('/admin');
        return updatedDoctor;

    } catch (error) {
        console.error("Error updating doctor:", error);
        throw new Error("Could not update doctor");     
        
    }
}