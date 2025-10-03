import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CalendarIcon, MicIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-background text-foreground">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_120%)] opacity-15"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-32 -left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-24 right-0 w-[32rem] h-[32rem] bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl opacity-50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary tracking-wide">
              AI-Powered Dental Assistant
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Bright <span className="text-primary">Smiles</span>, <br />
            Better <span className="text-primary">Care</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8">
            Experience professional dental care with comfort and precision. Our
            expert team is here to make your smile shine brighter every day.
          </p>

        
         <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button size={"lg"}>
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size={"lg"} variant={"outline"}>
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            width={450}
            height={450}
            src="/hero.png"
            alt="Dentist Illustration"
            className="hidden md:block w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
