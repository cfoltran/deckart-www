import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import "./styles.css";

export default function NotationBlogPost() {
  return (
    <article className="container" style={{ paddingTop: '100px' }}>
      <div className="blog-post">
        <FadeIn>
          <h1>Annote tes cartes comme un pro de la mémoire</h1>
          
          <div className="blog-post-meta">
            <div className="author">
              <span>Par Clément Foltran</span>
              <span className="role">co-fondateur de Deckart</span>
            </div>
            <time>15 Mars 2024</time>
          </div>

          <div className="blog-post-image">
            <Image
              src="https://mmvubaxqqouxqiaaljio.supabase.co/storage/v1/object/public/images//annotations.png"
              alt="Interface des annotations Deckart"
              width={800}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="blog-post-content">
            <p className="lead">
              Tu penses que tes idées valent de l&apos;or ? Nous aussi.
            </p>

            <p>
              Dès aujourd&apos;hui, tu peux annoter tes cartes dans Deckart. 🎉<br />
              C&apos;est simple, rapide, et ultra puissant pour mieux retenir.
            </p>

            <h2>Pourquoi les annotations, c&apos;est pas juste pour faire joli ?</h2>
            <p>
              Parce que ton cerveau aime quand tu expliques avec tes mots, tu donnes des exemples, ou tu fais des liens persos.
            </p>

            <p>
              💡 C&apos;est ce qu&apos;on appelle de l&apos;apprentissage actif. Et c&apos;est prouvé par la science : quand tu expliques, tu retiens.
            </p>

            <h2>Ce que tu peux écrire dans une annotation :</h2>
            <ul>
              <li>💬 Un résumé avec tes mots (parce que t&apos;es pas une imprimante)</li>
              <li>🎥 Un lien vers une vidéo YouTube qui t&apos;a aidé à comprendre</li>
              <li>🧠 Un souvenir ou une astuce mnémotechnique (&quot;La prof portait un chapeau rouge ce jour-là = Révolution de 1917 ?&quot;)</li>
              <li>🧑‍🏫 Une explication comme si tu parlais à un pote</li>
              <li>🎵 Même une punchline ou une blague si ça te fait retenir !</li>
            </ul>

            <h2>Concrètement, ça change quoi pour toi ?</h2>
            <ul>
              <li>✅ Tu ne fais plus que réviser, tu construis ta mémoire</li>
              <li>✅ Tu réutilises ta propre logique pour mieux comprendre</li>
              <li>✅ Tu transformes chaque carte en outil sur-mesure</li>
            </ul>

            <h2>Comment ça marche ?</h2>
            <ol>
              <li>Ouvre une carte</li>
              <li>Clique sur le petit 📝</li>
              <li>Ajoute ton annotation</li>
              <li>Et BOOM 💥 ta mémoire te dira merci</li>
            </ol>

            <p className="fun-fact">
              🧪 Fun fact : Les scientifiques appellent ça la &quot;double encodage&quot; et la &quot;pratique de récupération personnalisée&quot;. 
              Nous, on appelle ça être plus smart que ton manuel.
            </p>

            <div className="cta">
              <p>Alors, prêt·e à booster ton apprentissage ?</p>
              <p>👉 Mets à jour Deckart et commence à annoter comme un boss.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
} 