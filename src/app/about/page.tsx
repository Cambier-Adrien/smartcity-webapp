import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Section className="gap-8">
      <Title level={1}>À propos du projet</Title>
      <div className="flex justify-center items-center bg-white/60 backdrop-blur py-2 px-4 rounded-xl custom-shadow">
        <p className="text-base text-gray-800 text-center">
          <strong>
            Notre WebApp vise à sensibiliser à l&apos;écologie urbaine par une
            expérience ludique et immersive.
          </strong>{" "}
          Nous avons conçu une plateforme éducative qui combine le
          divertissement et l&apos;apprentissage.
        </p>
      </div>
      <Card className="w-full">
        <Title level={3}>Le concept en 4 piliers</Title>
        <ul className="w-full list-disc pl-6 text-base text-gray-700">
          <li>Une carte stylisée animée comme fond visuel</li>
          <li>Un quiz interactif simple et éducatif</li>
          <li>Une interprétation des résultats engageante</li>
          <li>Une page &quot;À propos&quot; détaillant notre vision</li>
        </ul>
      </Card>
      <Card className="w-full">
        <Title level={3}>
          Le quiz&nbsp;: ma ville est-elle une Smartcity écologique&nbsp;?
        </Title>
        <ul className="w-full list-disc pl-6 text-base text-gray-700">
          <li>6 questions simples et accessibles</li>
          <li>4 choix de réponse pour chaque question</li>
          <li>
            Une anecdote éducative &quot;Le saviez-vous&nbsp;?&quot; pour chaque
            question
          </li>
        </ul>
        <div className="mt-2 text-sm text-gray-600">
          <strong>Exemple&nbsp;:</strong> Les poubelles ou conteneurs sont-ils
          équipés de capteurs&nbsp;?
          <br />
          <em>
            Le saviez-vous&nbsp;? Des capteurs permettent d&apos;optimiser les
            tournées et de réduire les trajets inutiles, diminuant ainsi les
            émissions de CO₂.
          </em>
        </div>
      </Card>
      <Card className="w-full">
        <Title level={3}>Résultats du quiz</Title>
        <ul className="w-full list-disc pl-6 text-base text-gray-700">
          <li>
            <strong>Ville écolo et connectée</strong> : Bravo ! Votre ville est
            à la pointe de l&apos;innovation écologique et numérique.
          </li>
          <li>
            <strong>Sur la bonne voie</strong> : Votre ville a entamé sa
            transition écologique et numérique, mais il reste des efforts à
            faire.
          </li>
          <li>
            <strong>Ville classique</strong> : Votre ville utilise encore des
            méthodes traditionnelles. Un grand potentiel d&apos;amélioration
            existe !
          </li>
        </ul>
      </Card>
      <Card className="w-full">
        <Title level={3}>Technologies utilisées</Title>
        <ul className="w-full list-disc pl-6 text-base text-gray-700">
          <li>
            <strong>Développement Web</strong> : Next.js, TailwindCSS
          </li>
          <li>
            <strong>IA générative</strong> : ChatGPT (questions, explications,
            prompts), RunwayML (vidéo animée)
          </li>
          <li>
            <strong>Design &amp; Présentation</strong> : Gamma (présentation
            interactive)
          </li>
        </ul>
      </Card>
      <Card className="w-full">
        <Title level={3}>Réflexion et bilan</Title>
        <ul className="w-full list-disc pl-6 text-base text-gray-700">
          <li>
            Le lien entre ville intelligente et transition écologique nous
            concerne tous.
          </li>
          <li>
            Défis : interface simple, équilibre pédagogie/esthétique,
            vulgarisation technique.
          </li>
          <li>
            Points forts : impact visuel, engagement par le quiz, fusion
            innovation/message écologique.
          </li>
        </ul>
      </Card>
      <Card className="w-full">
        <Title level={3}>Perspectives et évolutions futures</Title>
        <ul className="w-full list-disc pl-6 text-base text-gray-700">
          <li>
            Intégration de données réelles pour personnaliser l&apos;expérience
            selon la localisation
          </li>
          <li>Version mobile avancée avec réalité augmentée</li>
          <li>
            Communauté participative pour proposer et voter des initiatives
            locales
          </li>
        </ul>
      </Card>
      <div className="flex justify-center items-center bg-transparent backdrop-blur py-2 px-4 rounded-full">
        <p className="text-xs text-white text-center">
          BOUFFARD PICARD Clément &middot; BROCCOLICHI Kylian &middot; CAMBIER
          Adrien &middot; HANSEN Lise
        </p>
      </div>
    </Section>
  );
}
