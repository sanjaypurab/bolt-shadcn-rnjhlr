import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Careers() {
  const positions = [
    {
      title: 'Senior React Developer',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Looking for an experienced React developer to join our team...',
    },
    {
      title: 'Node.js Backend Developer',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Seeking a backend developer with strong Node.js experience...',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our design team to create beautiful user experiences...',
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 mb-12">
            We're always looking for talented individuals to join our growing team.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position) => (
              <Card key={position.title}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">
                      {position.location} • {position.type}
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <Button className="w-full bg-[#00A651] hover:bg-[#008C44]">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}