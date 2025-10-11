import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AddTestimonialModal from './AddTestimonialModal';
import axiosInstance from "../utils/axiosInstance"

interface Testimonial {
  _id: string;
  nom: string;
  profession: string;
  message: string;
  rating: string;
}

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // const testimonials = [
  //   {
  //     name: 'Maëva.',
  //     role: 'Étudiante en Licence 3 Droit',
  //     content:
  //       "Students Glory m'a vraiment aidée à améliorer mes résultats scolaires. Mais surtout, j'ai découvert comment placer Dieu au centre de ma vie étudiante. Je me sens plus confiante et équipée pour mon avenir.",
  //   },
  //   {
  //     name: 'Gedeon',
  //     role: 'Étudiant en Licence Genie Logiciel',
  //     content:
  //       "Grâce aux ateliers de préparation professionnelle, j'ai décroché mon stage de rêve ! L'équipe m'a accompagné avec bienveillance et professionnalisme, tout en m'encourageant spirituellement.",
  //   },
  //   {
  //     name: 'Sarah L.',
  //     role: 'Étudiante en Terminale',
  //     content:
  //       "Les temps de partage biblique sont un vrai refuge pour moi. J'ai trouvé une communauté qui me pousse à grandir dans ma foi et mes études. Je recommande à tous les jeunes chrétiens !",
  //   },
  // ];

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("https://studentsglory-backend.onrender.com/api/testimonials")
      .then(res => setTestimonials(res.data.slice(0, 3))) // 3 plus récents
      .catch(err => console.error(err));
  }, []);

  const handleAddSuccess = async () => {
    setShowModal(false);
    const res = await axios.get("https://studentsglory-backend.onrender.com/api/testimonials");
    setTestimonials(res.data.slice(0, 3));
  };


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


        {testimonials.length === 0 ? (
          <p className='text-gray-600 italic mb-6 text-center h-40 flex justify-center items-center bg-gray-100'>
            Pas encore de témoignages. Faites un témoignage à propos de Student"s Glory
          </p>
        ) : (
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.nom}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="w-10 h-10 text-accent mb-4" />
                    <p className="text-muted-foreground mb-6 italic">{t.message}</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{t.nom}</p>
                      <div className='flex justify-between space-x-3'>
                        <p className="text-sm text-muted-foreground">{t.profession}</p>
                        <p className="mt-3 text-yellow-500 font-medium">⭐ {t.rating}/5</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      )}
      </div>

      <div className="flex flex-col sm:flex-row px-4 md:px-0 justify-center mt-10 gap-4">
        <button
          onClick={() => setShowModal(true)}
          className='bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all'
        >
          Ajouter un témoignage
        </button>

        <button
          onClick={() => navigate("/all-testimonials")}
          className='bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700'
        >
          Voir tous les temoignage
        </button>
      </div>

      {showModal && (
        <AddTestimonialModal 
          onClose={() => setShowModal(false)}
          onSuccess={handleAddSuccess}
        />
      )}
    </section>
  );
};

export default Testimonials;
