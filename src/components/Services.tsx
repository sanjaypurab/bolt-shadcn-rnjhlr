import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions across the entire development spectrum,
            specializing in MERN stack technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as LucideIcon;
            return (
              <Card key={service.title} className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#00A651]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#00A651]" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}