import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Transform Your Digital Vision Into{' '}
              <span className="text-[#00A651]">Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're a full-stack development agency specializing in MERN stack solutions,
              with presence in the UK and Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#00A651] hover:bg-[#008C44] text-lg px-8">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}