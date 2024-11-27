import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { COMPANY_NAME } from '@/lib/constants';

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt={COMPANY_NAME} className="h-8 w-auto" />
          <span className="font-bold text-xl text-[#00A651]">{COMPANY_NAME}</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-[#FF6B00]">Services</a>
          <a href="#about" className="text-gray-600 hover:text-[#FF6B00]">About</a>
          <a href="#contact" className="text-gray-600 hover:text-[#FF6B00]">Contact</a>
          <Button className="bg-[#00A651] hover:bg-[#008C44]">Get Started</Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              <a href="#services" className="text-gray-600 hover:text-[#FF6B00]">Services</a>
              <a href="#about" className="text-gray-600 hover:text-[#FF6B00]">About</a>
              <a href="#contact" className="text-gray-600 hover:text-[#FF6B00]">Contact</a>
              <Button className="bg-[#00A651] hover:bg-[#008C44] w-full">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}