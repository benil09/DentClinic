"use server";
import { prisma } from "../prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function syncUsers() {
    try {
        const clerkUsers = await currentUser();
        if (!clerkUsers) return;

        const existingUser = await prisma.user.findUnique({
            where: { clerkId: clerkUsers.id },
        });

        if(existingUser) return;
        
       const dbUser = await prisma.user.create({
            data: {
                clerkId: clerkUsers.id,
                email: clerkUsers.emailAddresses[0]?.emailAddress || "",
                firstName: clerkUsers.firstName || "",
                lastName: clerkUsers.lastName || "",
                phone: clerkUsers.phoneNumbers[0]?.phoneNumber || "",
            },

        });
        return dbUser;
    } catch (error) {
        console.error("Error syncing users:", error);
        throw error;
        
        
    }

}
