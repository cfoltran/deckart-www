import Image from "next/image";
import FadeIn from "./components/FadeIn";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <FadeIn>
            <div className="hero-text">
              <h1>DÉVELOPPEZ UNE MÉMOIRE D'ÉLÉPHANT</h1>
              <p className="hero-subtitle">Deckart utilise la science cognitive pour optimiser la mémorisation et permettre aux élèves d'apprendre plus efficacement.</p>
              
              <div className="hero-badges">
                <div className="hero-badge red">
                  <Image src="/assets/brain-head.svg" alt="Science" width={20} height={20} />
                  Méthode scientifique
                </div>
                <div className="hero-badge yellow">
                  <Image src="/assets/trophy.svg" alt="Fun" width={20} height={20} />
                  Apprentissage ludique
                </div>
                <div className="hero-badge green">
                  <Image src="/assets/synchronize-arrows-square.svg" alt="Répétition" width={20} height={20} />
                  Répétition optimisée
                </div>
              </div>
              
              <div className="ctas">
                <a href="https://app.deckart.xyz" className="btn">COMMENCER GRATUITEMENT</a>
                <a href="https://play.google.com/store/apps/details?id=com.cle.deckart" className="btn btn-secondary">TÉLÉCHARGER L'APP</a>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="hero-mascot">
              <Image src="/assets/rené-5.png" alt="Éléphant Deckart avec une tablette" width={450} height={450} />
              <div className="stars">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur"/>
                      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                  </defs>
                  
                  <g filter="url(#glow)">
                    {/* Grande étoile */}
                    <path d="M50 15 L54 27 L66 27 L56 35 L60 47 L50 40 L40 47 L44 35 L34 27 L46 27 Z" fill="#FFD166" />
                    
                    {/* Petite étoile en haut à droite */}
                    <path d="M75 25 L77 32 L84 32 L78 36 L80 43 L75 39 L70 43 L72 36 L66 32 L73 32 Z" fill="#FFD166" />
                    
                    {/* Petite étoile en bas à gauche */}
                    <path d="M25 60 L27 67 L34 67 L28 71 L30 78 L25 74 L20 78 L22 71 L16 67 L23 67 Z" fill="#FFD166" />
                    
                    {/* Étoile moyenne à droite */}
                    <path d="M70 55 L73 65 L83 65 L75 71 L78 81 L70 75 L62 81 L65 71 L57 65 L67 65 Z" fill="#FFD166" />
                    
                    {/* Petite étincelle 1 */}
                    <circle cx="38" cy="30" r="2" fill="#FFD166" />
                    
                    {/* Petite étincelle 2 */}
                    <circle cx="58" cy="55" r="1.5" fill="#FFD166" />
                    
                    {/* Petite étincelle 3 */}
                    <circle cx="85" cy="45" r="2" fill="#FFD166" />
                    
                    {/* Petite étincelle 4 */}
                    <circle cx="20" cy="40" r="1" fill="#FFD166" />
                  </g>
                  
                  {/* Animations */}
                  <style>
                    {`
                      @keyframes twinkle {
                        0%, 100% { opacity: 0.7; transform: scale(0.9); }
                        50% { opacity: 1; transform: scale(1); }
                      }
                      
                      @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5px); }
                      }
                      
                      @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                      
                      path, circle {
                        animation: twinkle 3s infinite ease-in-out;
                      }
                      
                      path:nth-child(1) {
                        animation-delay: 0s;
                      }
                      
                      path:nth-child(2) {
                        animation-delay: 0.5s;
                      }
                      
                      path:nth-child(3) {
                        animation-delay: 1s;
                      }
                      
                      path:nth-child(4) {
                        animation-delay: 1.5s;
                      }
                      
                      circle:nth-child(5) {
                        animation-delay: 0.2s;
                      }
                      
                      circle:nth-child(6) {
                        animation-delay: 0.7s;
                      }
                      
                      circle:nth-child(7) {
                        animation-delay: 1.2s;
                      }
                      
                      circle:nth-child(8) {
                        animation-delay: 1.7s;
                      }
                      
                      g {
                        animation: float 6s infinite ease-in-out;
                      }
                    `}
                  </style>
                </svg>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="download-banner">
        <div className="container">
          <div className="download-content">
            <div className="download-text">
              <h3>Formation gratuite : techniques de mémorisation scientifiquement prouvées</h3>
              <p>Apprenez les méthodes qui font la différence entre "j'ai tout oublié" et "je maîtrise mon sujet"</p>
            </div>
            <div className="download-action">
              <a href="/assets/FormationDeckart.pdf" download className="download-btn">
                Télécharger gratuitement
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Apprendre n'a jamais été aussi efficace</h2>
              <p>Notre approche s'appuie sur quatre piliers fondamentaux issus des neurosciences</p>
            </div>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/assets/game-cards.svg" alt="Récupération active" width={80} height={80} />
                </div>
                <div className="feature-content">
                  <h3>Récupération active</h3>
                  <p>Nos flashcards interactives vous obligent à récupérer activement l'information en mémoire, renforçant ainsi les connexions neuronales.</p>
                  <a href="#how-it-works" className="btn-text">En savoir plus</a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="feature-card">
                <div className="feature-icon red">
                  <Image src="/assets/brain-head.svg" alt="Répétition espacée" width={80} height={80} />
                </div>
                <div className="feature-content">
                  <h3>Répétition espacée</h3>
                  <p>Notre algorithme optimise le moment des révisions selon votre courbe d'oubli personnelle, pour une mémorisation durable.</p>
                  <a href="#how-it-works" className="btn-text">En savoir plus</a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="feature-card">
                <div className="feature-icon yellow">
                  <Image src="/assets/trophy.svg" alt="Apprentissage ludique" width={80} height={80} />
                </div>
                <div className="feature-content">
                  <h3>Apprentissage ludique</h3>
                  <p>Des défis, des récompenses et des animations qui transforment l'effort cognitif en expérience motivante et engageante.</p>
                  <a href="#how-it-works" className="btn-text">En savoir plus</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Comment fonctionne Deckart</h2>
              <p>Une approche simple et intuitive pour mémoriser efficacement</p>
            </div>
          </FadeIn>
          
          <div className="steps-container">
            <FadeIn>
              <div className="step">
                <div className="step-mascot">
                  <Image src="/assets/rené-2.png" alt="Éléphant avec téléphone" width={150} height={150} />
                </div>
                <div className="step-content">
                  <div className="step-title">
                    <div className="step-number">1</div>
                    <h3>Choisissez votre matière</h3>
                  </div>
                  <p>Sélectionnez parmi nos nombreux cours alignés sur le programme scolaire ou créez vos propres flashcards personnalisées. Des contenus adaptés pour tous les niveaux, du collège au lycée.</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="step">
                <div className="step-mascot">
                  <Image src="/assets/rené-4.png" alt="Éléphant qui étudie" width={150} height={150} />
                </div>
                <div className="step-content">
                  <div className="step-title">
                    <div className="step-number">2</div>
                    <h3>Apprenez en vous amusant</h3>
                  </div>
                  <p>Répondez aux questions interactives et progressez à travers des exercices variés. Notre méthode combine texte, audio et musique pour stimuler différentes zones du cerveau et renforcer la mémorisation.</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="step">
                <div className="step-mascot">
                  <Image src="/assets/rené-6.png" alt="Éléphant qui célèbre" width={150} height={150} />
                </div>
                <div className="step-content">
                  <div className="step-title">
                    <div className="step-number">3</div>
                    <h3>Suivez vos progrès</h3>
                  </div>
                  <p>Notre algorithme analyse vos performances et planifie automatiquement vos révisions au moment optimal. Visualisez votre progression et gagnez des récompenses à chaque étape de votre apprentissage.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Ce que disent nos utilisateurs</h2>
              <p>Découvrez comment Deckart transforme l'apprentissage</p>
            </div>
          </FadeIn>
          
          <div className="testimonial-slider">
            <FadeIn>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>Oui vraiment j'adore cette application, elle est super bien pour réviser... Seul petit truc à rajouter pour moi c'est que je trouve que ce serait trop bien de faire les cours de toutes les matières.</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">A</div>
                  <div className="author-info">
                    <h4>Artemis</h4>
                    <p>Élève de 4ème</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>En tant que professeur, j'apprécie que mes élèves arrivent en classe avec les bases déjà mémorisées. Ça me permet d'aller plus loin dans les applications pratiques et la résolution de problèmes.</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">M</div>
                  <div className="author-info">
                    <h4>Mathieu L.</h4>
                    <p>Professeur de Mathématiques</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>Finies les longues soirées de révision stressantes avant les examens. Ma fille révise régulièrement avec Deckart et aborde maintenant les contrôles avec sérénité. Ses notes ont progressé de façon impressionnante !</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">S</div>
                  <div className="author-info">
                    <h4>Sophie M.</h4>
                    <p>Parent d'élève</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>Notre collège utilise Deckart depuis 6 mois et nous avons constaté une nette amélioration de l'engagement des élèves. L'aspect ludique les motive et les résultats aux évaluations sont en hausse.</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">J</div>
                  <div className="author-info">
                    <h4>Julie D.</h4>
                    <p>Principale adjointe</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>Nos tarifs pour les établissements</h2>
              <p>Des prix dégressifs adaptés à la taille de votre établissement</p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="pricing-table-container">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Nombre d'élèves</th>
                    <th>Tarif mensuel par élève</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>de 1 à 100</td>
                    <td>3,96 €</td>
                  </tr>
                  <tr>
                    <td>de 100 à 500</td>
                    <td>3,52 €</td>
                  </tr>
                  <tr>
                    <td>de 500 à 1000</td>
                    <td>3,08 €</td>
                  </tr>
                  <tr>
                    <td>1000 et plus</td>
                    <td>2,64 €</td>
                  </tr>
                </tbody>
              </table>
              <Image 
                className="pricing-mascot" 
                src="/assets/rené-1.png" 
                alt="Éléphant avec des livres"
                width={150}
                height={150}
              />
            </div>
          </FadeIn>
          
          <div className="ctas" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
            <a href="https://n9ylpal3js2.typeform.com/to/sUAO4tmG" className="btn">DEMANDER UN DEVIS</a>
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
