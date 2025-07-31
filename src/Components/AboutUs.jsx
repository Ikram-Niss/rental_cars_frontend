import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-purple-900 text-white p-8 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        🧑‍💻 À propos de Nous
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://source.unsplash.com/600x400/?team,office"
            alt="Notre équipe"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="bg-gray-900 text-white shadow-2xl rounded-2xl">
            <CardContent className="p-6 text-lg leading-relaxed text-gray-300">
              Bienvenue chez <span className="text-purple-400 font-semibold">AutoXpress</span>, votre plateforme dédiée à la gestion et la présentation des voitures. Notre mission est de faciliter la vie des professionnels de l'automobile grâce à des outils modernes, simples et efficaces. 🌟
              <br /><br />
              Nous sommes une équipe passionnée par la technologie et l'automobile, et nous croyons au pouvoir du digital pour transformer l'expérience de gestion des véhicules. 🚗💻
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 text-center text-gray-400"
      >
        © 2025 AutoXpress. Tous droits réservés.
      </motion.div>
    </div>
  );
};

export default AboutUs;
