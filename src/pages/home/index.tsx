import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <main>
        <div className="container text-center p-5 h-screen flex flex-col items-center justify-center gap-3 max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
          <img
            src="/icon.png"
            alt="Zeus"
            className="w-full max-w-xs animate-fade-left duration-500"
          />
          <div className="space-y-3 animate-fade-right duration-500 md:max-w-xs lg:max-w-md">
            <div>
              <p className="text-xl font-black lg:text-2xl xl:text-3xl">Welcome to</p>
              <h2 className="text-5xl font-black bg-brand-gradient text-transparent bg-clip-text xl:text-6xl ">
                Zeus Docs
              </h2>
            </div>
            <p className="px-3 md:p-0">
              Zeus Docs is a documentation platform for your projects. It's a place where you
              can document everything about your project.
            </p>
            <div className="flex gap-3">
              <Link to={ROUTES.HOME} className="flex-1">
                <Button className="hover:scale-105 transition-transform duration-200 ease-in-out w-full">
                  Get Started
                </Button>
              </Link>
              <Link to={ROUTES.HOME} className="flex-1">
                <Button variant="outline" className="gap-2 w-full">
                  Create Account <ChevronsRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
