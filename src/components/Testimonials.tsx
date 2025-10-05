import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Maëva.',
      role: 'Étudiante en Licence 3 Droit',
      content:
        "Students Glory m'a vraiment aidée à améliorer mes résultats scolaires. Mais surtout, j'ai découvert comment placer Dieu au centre de ma vie étudiante. Je me sens plus confiante et équipée pour mon avenir.",
    },
    {
      name: 'Gedeon',
      role: 'Étudiant en Licence Genie Logiciel',
      content:
        "Grâce aux ateliers de préparation professionnelle, j'ai décroché mon stage de rêve ! L'équipe m'a accompagné avec bienveillance et professionnalisme, tout en m'encourageant spirituellement.",
    },
    {
      name: 'Sarah L.',
      role: 'Étudiante en Terminale',
      content:
        "Les temps de partage biblique sont un vrai refuge pour moi. J'ai trouvé une communauté qui me pousse à grandir dans ma foi et mes études. Je recommande à tous les jeunes chrétiens !",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils parlent de Students Glory</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvre ce que nos membres disent de leur expérience au sein de l'association.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
