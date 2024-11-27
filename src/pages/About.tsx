import { Building2, Users2, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results',
    },
    {
      icon: Building2,
      title: 'Excellence',
      description: 'Delivering quality in every project we undertake',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Building trust through transparent relationships',
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-6">About SATPHONIX</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            We are a leading web development agency with offices in the UK and Nigeria,
            specializing in creating innovative digital solutions using the MERN stack.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, SATPHONIX has grown from a small team of passionate
                developers to a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-gray-600">
                Our presence in both the UK and Nigeria allows us to bring diverse
                perspectives and talent to every project we undertake.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-none shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00A651]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#00A651]" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}