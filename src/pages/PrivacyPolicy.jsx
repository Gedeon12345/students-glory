import React from 'react'
import Header from '@/components/Header';


export default function PrivacyPolicy(){
return (
    <>
        <Header />
        <div className="max-w-3xl mx-auto pt-20">
            <h1 className="text-2xl font-bold mb-4">Politique de confidentialité</h1>


            <p className="mb-4">Cette politique de confidentialité décrit comment <strong>Students Glory</strong> collecte, utilise et protège les informations personnelles des utilisateurs de notre site <em>students-glory.vercel.app</em>.</p>


            <h2 className="text-lg font-semibold mt-4">1. Données collectées</h2>
            <p className="text-gray-700">Nous pouvons collecter des informations telles que nom, email et message lorsque vous utilisez notre formulaire de contact. Nous utilisons également des outils analytiques anonymes pour comprendre le trafic (ex : Google Analytics, si activé).</p>


            <h2 className="text-lg font-semibold mt-4">2. Utilisation des données</h2>
            <p className="text-gray-700">Les informations collectées servent à répondre à vos demandes, améliorer le site et vous envoyer d'éventuelles communications si vous avez donné votre consentement.</p>


            <h2 className="text-lg font-semibold mt-4">3. Partage des données</h2>
            <p className="text-gray-700">Nous ne vendons pas vos données. Nous pouvons partager des données avec des prestataires techniques (hébergement, analytics) qui respectent la confidentialité.</p>


            <h2 className="text-lg font-semibold mt-4">4. Cookies</h2>
            <p className="text-gray-700">Le site peut utiliser des cookies pour améliorer l'expérience. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.</p>


            <h2 className="text-lg font-semibold mt-4">5. Sécurité</h2>
            <p className="text-gray-700">Nous prenons des mesures raisonnables pour protéger les données. Toutefois, aucune méthode de transmission sur internet n'est totalement sûre.</p>


            <h2 className="text-lg font-semibold mt-4">6. Contact</h2>
            <p className="text-gray-700">Pour toute question relative à la vie privée, contactez-nous via la page Contact.</p>
        </div>
    </>
)
}
