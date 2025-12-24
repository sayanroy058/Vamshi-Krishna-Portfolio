import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vamsikrishnakarnam1221@gmail.com',
      href: 'mailto:vamsikrishnakarnam1221@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(332) 258-6532',
      href: 'tel:+13322586532',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Charlotte, North Carolina 28202',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block font-body text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Get in Touch
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4 md:mb-6" />
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Interested in collaborating or have a question? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-primary md:w-[22px] md:h-[22px]" />
                  </div>
                  <div>
                    <p className="font-body text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-body text-sm md:text-base text-foreground hover:text-accent transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm md:text-base text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick Message */}
              <div className="pt-4 md:pt-6 border-t border-border">
                <p className="font-body text-sm md:text-base text-muted-foreground italic">
                  "Passionate about creating exceptional culinary experiences and always eager to learn and grow in the hospitality industry."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-1.5 md:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1.5 md:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-1.5 md:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg shadow-elegant transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] text-sm md:text-base"
                  >
                    <Send size={16} className="md:w-[18px] md:h-[18px]" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
