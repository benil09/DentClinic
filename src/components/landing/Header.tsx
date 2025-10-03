import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const header = () => {
  return (
    <nav className="fixwd-top top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className=" max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="Dentclinic Logo"
            width={32}
            height={32}
            className="w-11"
          />
          <span className="font-semibold text-lg"> Dentclinic </span>
        </Link>
        <div className="hidden md:flex items-center gap-8  ">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-all duration-200">How it Works </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-all duration-200">Pricing </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-all duration-200">About </a>
        </div>

        <div className="flex items-center gap-4">
          <SignInButton>
            <Button className="border" variant={"ghost"} >Login</Button>
          </SignInButton>
          <SignUpButton>
           <Button>Sign up</Button>
          </SignUpButton>
        </div>

      </div>
    </nav>
  );
};

export default header;
