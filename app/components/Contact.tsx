import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <FadeIn>
            <div className="contact-text">
              <h2>Téléchargez l&apos;application</h2>
              <p>Disponible sur iOS et Android, Deckart est l&apos;outil idéal pour aider les élèves à mémoriser et progresser efficacement.</p>
              <div className="store-buttons">
                <a href="https://apps.apple.com/us/app/keynote/6702029675" target="_blank" className="store-btn">
                  <Image src="/assets/app-store.svg" alt="Télécharger sur l'App Store" width={150} height={50} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.cle.deckart" target="_blank" className="store-btn">
                  <Image src="/assets/google-play.png" alt="Télécharger sur le Play Store" width={150} height={50} />
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="contact-image">
              <Image src="/assets/app-success.PNG" alt="Écran de l'application Deckart" width={300} height={600} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 