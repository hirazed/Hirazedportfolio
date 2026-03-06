import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send, Palette, MessageSquare, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import your social media icons
import behanceIcon from '@/assets/logos/logo8.png'; // Behance
import linkedinIcon from '@/assets/logos/logo9.png'; // LinkedIn
import telegramIcon from '@/assets/logos/logo10.png'; // Telegram
import emailIcon from '@/assets/logos/logo11.png'; // Email

const ContactPage = () => {
  const navigate = useNavigate();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2">
              Let's Work Together
            </h1>
            <p className="text-primary/80 text-xl mt-2">አብረን እንስራ</p>
            <p className="text-muted-foreground mt-6 text-lg">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef as React.RefObject<HTMLElement>} className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className={`lg:col-span-2 space-y-8 ${formVisible ? 'animate-fade-in-left opacity-0' : 'opacity-0'}`}
              style={{ animationFillMode: 'forwards' }}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'hirazed97@gmail.com', href: 'mailto:hirazed97@gmail.com' },
                  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+251 91 234 5678', href: 'tel:+251912345678' },
                  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links - UPDATED with your icons */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {[
                    { icon: behanceIcon, href: 'https://www.behance.net/hiruyzerihun', label: 'Behance' },
                    { icon: linkedinIcon, href: 'https://www.linkedin.com/in/hiruy-zerihun250997/', label: 'LinkedIn' },
                    { icon: telegramIcon, href: 'https://t.me/Hirazed', label: 'Telegram' },
                    { icon: emailIcon, href: 'mailto:Hirazed97@gmail.com', label: 'Email' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors flex items-center justify-center"
                      title={social.label}
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="w-5 h-5 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 ${formVisible ? 'animate-fade-in-right opacity-0' : 'opacity-0'}`}
              style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>
              <div className="bg-card rounded-2xl border border-border p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="social-media">Social Media Design</option>
                        <option value="branding">Branding Project</option>
                        <option value="marketing">Marketing Graphics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="rounded-2xl overflow-hidden border border-border h-64 md:h-96 bg-card flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary/50" />
              <p>Addis Ababa, Ethiopia</p>
              <p className="text-sm mt-2">Available for projects worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;