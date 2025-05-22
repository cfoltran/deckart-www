"use client";

import { useState } from 'react';
import FadeIn from './FadeIn';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce que Deckart ?",
    answer: "Deckart est une application d'apprentissage qui utilise les méthodes scientifiquement prouvées comme étant les plus efficaces pour la mémorisation à long terme. Notre approche combine la récupération active, la répétition espacée, l'apprentissage intercalé et l'engagement ludique pour maximiser l'efficacité des révisions."
  },
  {
    question: "À partir de quel âge peut-on utiliser Deckart ?",
    answer: "Deckart est conçu pour les élèves à partir de 11 ans (niveau collège) jusqu'au lycée. L'application s'adapte au niveau de l'utilisateur et propose des contenus alignés sur les programmes scolaires officiels de l'Éducation nationale."
  },
  {
    question: "Comment fonctionne le système de révision ?",
    answer: "Notre système utilise un algorithme d'apprentissage adaptatif inspiré du modèle de Leitner. Il analyse vos performances pour déterminer précisément quand chaque notion doit être révisée, juste avant qu'elle ne soit oubliée. Les révisions sont présentées sous différentes formes (texte, audio, quiz) pour renforcer la mémorisation."
  },
  {
    question: "Comment intégrer Deckart dans mon établissement ?",
    answer: "L'intégration est simple. Nous proposons un accompagnement qui comprend une présentation aux équipes pédagogiques, une formation à l'utilisation, et un suivi. L'application est compatible avec la plupart des ENT et peut être déployée sur tous les appareils. Contactez-nous pour organiser une démonstration ou obtenir un devis personnalisé."
  },
  {
    question: "Comment puis-je créer mes propres cartes ?",
    answer: "Deckart vous permet facilement de créer vos propres flashcards. Vous pouvez ajouter du texte, des images et même des fichiers audio. Vous pouvez également partager vos decks avec d'autres utilisateurs ou les garder privés. C'est un excellent moyen de personnaliser votre apprentissage selon vos besoins spécifiques."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2>Questions fréquentes</h2>
            <p>Tout ce que vous devez savoir sur Deckart</p>
          </div>
        </FadeIn>
        
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <FadeIn key={index}>
              <div className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
} 