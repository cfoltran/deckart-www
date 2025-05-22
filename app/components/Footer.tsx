import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              <Image src="/assets/deckart.svg" alt="Deckart" width={120} height={30} />
            </div>
            <p className="footer-description">
              Deckart est une application qui révolutionne l&apos;apprentissage en implémentant les méthodes scientifiquement prouvées comme étant les plus efficaces pour la mémorisation à long terme.
            </p>
          </div>
          
          <div>
            <h3 className="footer-heading">Deckart</h3>
            <div className="footer-links">
              <Link href="/#features">Fonctionnalités</Link>
              <Link href="/#how-it-works">Comment ça marche</Link>
              <Link href="/#pricing">Tarifs</Link>
              <Link href="/#testimonials">Témoignages</Link>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Ressources</h3>
            <div className="footer-links">
              <Link href="/assets/brochure_v3.pdf">Brochure</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
          </div>
          
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-links">
              <a href="mailto:contact@deckart.xyz">contact@deckart.xyz</a>
              <Link href="/privacy-policy">Politique de confidentialité</Link>
              <Link href="/delete-account">Supprimer mon compte</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Deckart. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 