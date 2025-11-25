import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { FloatUp } from './animations/float-up';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: FaInstagram,
      title: 'Instagram',
      value: '@hmti_uns',
    },
    {
      icon: FaYoutube,
      title: 'Youtube',
      value: 'HMTI UNS',
    },
    {
      icon: FaTiktok,
      title: 'Tiktok',
      value: '@hmti_uns',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <FloatUp>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold"></span>
              <h2 className="text-4xl font-bold text-foreground mt-4 mb-4">
                Mari Kenal Lebih Dekat
              </h2>
              <p className="text-foreground/70 text-lg">
                Saatnya terhubung lebih dekat bersama HMTI UNS melalui sosial media kami.
              </p>
            </div>
          </FloatUp>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <FloatUp key={index} delay={index * 0.1}>
                  <div className="bg-background rounded-xl p-6 border border-border text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </FloatUp>
              );
            })}
          </div>

          {/* CTA */}
          <FloatUp delay={0.3}>
            <div className="text-center">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                <a
                  href="https://linktr.ee/hmti.uns?utm_source=linktree_profile_share&ltsid=22cd8fa9-924e-48a7-a536-8557b9e46ada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </FloatUp>

        </div>
      </div>
    </section>
  );
}