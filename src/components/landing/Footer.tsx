import Image from "next/image";

function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-14 border-t bg-muted/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DentWise Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">DentWise</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

         {/* // <div className="flex justify-between p-4"> */}

          
          <div>
            <h4 className="font-semibold text-base mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>

        <div className="border-t mt-10 pt-6 text-center text-xs sm:text-sm text-muted-foreground px-4">
          <p>
            &copy; {new Date().getFullYear()} DentWise. Built for real people
            with real dental questions.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
