import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LOCATIONS } from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
            
            <div className="space-y-6">
              {Object.entries(LOCATIONS).map(([country, info]) => (
                <div key={country} className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#00A651] mt-1" />
                  <div>
                    <h3 className="font-semibold">{country}</h3>
                    <p className="text-gray-600">{info.address}</p>
                    <p className="text-gray-600">{info.phone}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#00A651]" />
                <p className="text-gray-600">contact@satphonix.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-[#00A651] hover:bg-[#008C44]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}