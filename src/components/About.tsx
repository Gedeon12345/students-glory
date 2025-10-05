import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description:
        "Accompagner chaque étudiant dans son excellence académique et spirituelle, en développant ses talents pour la gloire de Dieu.",
    },
    {
      icon: Eye,
      title: 'Vision',
      description:
        "Bâtir une génération d'étudiants leaders, intègres et impactants, qui transforment le monde par leur foi et leurs compétences.",
    },
    {
      icon: Heart,
      title: 'Valeurs',
      description:
        "Excellence, intégrité, foi, service et communauté. Nous croyons que Christ est le fondement de toute réussite véritable.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui sommes-nous ?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Students Glory est une association qui accompagne les élèves et étudiants dans leur parcours académique et
            professionnel, tout en plaçant Jésus-Christ au cœur de chaque étape. Notre mission est de bâtir une
            génération d'excellence, intégrité et foi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
