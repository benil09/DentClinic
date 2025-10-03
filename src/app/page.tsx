import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut ,SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SignedOut>
        <SignUpButton mode="modal">SignUp</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <Button variant="outline">Logout</Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
