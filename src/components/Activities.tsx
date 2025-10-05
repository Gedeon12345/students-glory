import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, BookOpen, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Activities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activities = [
    {
      icon: GraduationCap,
      title: 'Mentorat académique',
      description:
        "Accompagnement personnalisé pour exceller dans tes études : aide aux devoirs, méthodologie, préparation aux examens.",
    },
    {
      icon: Briefcase,
      title: 'Préparation professionnelle',
      description:
        "Ateliers CV, simulations d'entretien, orientation de carrière et développement de compétences professionnelles.",
    },
    {
      icon: BookOpen,
      title: 'Partage biblique et prière',
      description:
        "Temps de méditation de la Parole, prière collective et encouragement mutuel pour grandir spirituellement ensemble.",
    },
    {
      icon: Mic,
      title: 'Ateliers et conférences',
      description:
        "Événements inspirants avec des intervenants chrétiens leaders dans différents domaines professionnels.",
    },
  ];

  return (
    <section id="activities" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nous faisons</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des activités conçues pour t'accompagner dans ton parcours académique, professionnel et spirituel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-accent/20 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
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

export default Activities;
