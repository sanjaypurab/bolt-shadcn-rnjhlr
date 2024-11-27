import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Analytics dashboard for healthcare providers',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management system',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
      technologies: ['React', 'Express', 'MongoDB', 'AWS'],
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore our latest projects and see how we've helped businesses transform
            their digital presence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}