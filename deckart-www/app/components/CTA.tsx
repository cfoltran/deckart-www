"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

export default function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <Image 
          className="cta-mascot" 
          src="/assets/rené-3.png" 
          alt="Éléphant heureux"
          width={180}
          height={180}
        />
        <FadeIn>
          <h2>Prêt à révolutionner votre façon d'apprendre ?</h2>
        </FadeIn>
        <FadeIn>
          <p>Rejoignez les milliers d'utilisateurs qui ont déjà amélioré leurs résultats grâce à Deckart</p>
        </FadeIn>
        <FadeIn>
          <a href="https://app.deckart.xyz" className="btn">COMMENCER GRATUITEMENT</a>
        </FadeIn>
      </div>
    </section>
  );
} 