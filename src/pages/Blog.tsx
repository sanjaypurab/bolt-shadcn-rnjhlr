import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Blog() {
  const posts = [
    {
      title: 'The Future of MERN Stack Development',
      excerpt: 'Exploring upcoming trends and innovations in MERN stack development...',
      date: 'January 15, 2024',
      author: 'John Smith',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    },
    {
      title: 'Building Scalable Applications with MongoDB',
      excerpt: 'Best practices for designing scalable MongoDB databases...',
      date: 'January 10, 2024',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80',
    },
    {
      title: 'React Performance Optimization Tips',
      excerpt: 'Practical tips for improving React application performance...',
      date: 'January 5, 2024',
      author: 'Michael Brown',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Insights, tutorials, and updates from our team of experts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
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