import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react"; // Icône de fermeture (installer: npm install lucide-react)

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddTestimonialModal({ onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    nom: "",
    profession: "",
    message: "",
    rating: 5,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/testimonials", form);
      setLoading(false);
      onSuccess(); // actualise et ferme
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative animate-fadeIn">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        <h3 className="text-2xl font-bold mb-4 text-center text-green-700">
          Ajouter un témoignage
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full border p-2 rounded focus:outline-green-500"
            required
          />
          <input
            type="text"
            placeholder="Profession"
            value={form.profession}
            onChange={(e) => setForm({ ...form, profession: e.target.value })}
            className="w-full border p-2 rounded focus:outline-green-500"
            required
          />
          <textarea
            placeholder="Votre Temoignage"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-2 rounded focus:outline-green-500"
            required
          />
          <div className="flex items-center gap-2">
            <label className="font-medium">Note :</label>
            <input
              type="number"
              min="1"
              max="5"
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: Number(e.target.value) })
              }
              className="border p-2 rounded w-20 text-center"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}