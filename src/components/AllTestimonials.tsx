import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

interface Testimonial {
  _id: string;
  nom: string;
  profession: string;
  message: string;
  rating: number;
}

export default function AllTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://studentsglory-backend.onrender.com/api/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
        <button
          onClick={() => navigate("/")}
          className='bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-900 transition-all absolute top-5 left-5'
        >
          Retour à l'accueil
        </button>
        {testimonials.length === 0 ? (
            <p className="text-gray-600 italic py-10 mt-20 px-4 bg-gray-50 min-h-screen text-center flex justify-center items-center">
                Pas encore de temoignage. Faites un témoignage à propos de Student"s Glory
            </p>
        ) : (
            <section className="py-10 mt-20 px-4 bg-gray-50 min-h-screen">
                <h2 className="text-3xl font-bold text-center mb-8">Tous les témoignages</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                    <div
                        key={t._id}
                        className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
                    >
                        <p className="text-lg font-semibold text-gray-800">{t.nom}</p>
                        <p className="text-sm text-gray-500">{t.profession}</p>
                        <p className="mt-3 text-gray-700 italic">“{t.message}”</p>
                        <p className="mt-3 text-yellow-500 font-medium">⭐ {t.rating}/5</p>
                    </div>
                    ))}
                </div>
            </section>
        )}

        <Footer />
    </>
  );
}