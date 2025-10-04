"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { syncUsers } from "../lib/actions/users";

export default function UserSync() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUsers();
        } catch (error) {
          console.error("Error syncing user:", error);
        }
    }
    };

    handleUserSync();
  }, [isSignedIn , isLoaded]);

  return null;
}
