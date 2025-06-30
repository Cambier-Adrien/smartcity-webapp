import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Section className="gap-8">
      <Title level={2} className="mb-1 text-center">
        À propos du projet
      </Title>
      <p className="text-base md:text-lg text-gray-700 mb-4 text-center max-w-xl mx-auto">
        <strong>Imagine ta ville</strong> est une expérience interactive créée
        lors du hackathon "IA for Good". L&apos;objectif : sensibiliser à
        l&apos;écologie urbaine en montrant l&apos;impact de nos choix sur la
        ville du futur.
      </p>
      <Card className="w-full max-w-xl mx-auto">
        <h3 className="text-lg font-bold mb-2 text-accent-blue">
          Notre démarche
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
          <li>
            Chaque étape met en avant un enjeu concret de la Smart City :
            mobilité, énergie, nature, IA.
          </li>
          <li>
            Les choix de l'utilisateur influencent le score écologique et la
            vision finale de la ville.
          </li>
          <li>
            Le résultat est généré par l'IA : image stylisée, score, slogan
            personnalisé.
          </li>
          <li>
            Le design s'inspire de{" "}
            <a
              href="https://wepresent.wetransfer.com/"
              className="text-accent-pink underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WePresent
            </a>{" "}
            pour une expérience immersive et moderne.
          </li>
        </ul>
      </Card>
      <Card className="w-full max-w-xl mx-auto">
        <h3 className="text-lg font-bold mb-2 text-accent-green">
          Notre réflexion critique
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-base">
          <li>
            L'IA peut être un outil puissant pour l'écologie, mais elle pose
            aussi des questions éthiques (surveillance, vie privée, etc.).
          </li>
          <li>
            Ce projet invite à réfléchir à l'équilibre entre technologie,
            environnement et qualité de vie.
          </li>
          <li>
            La personnalisation du résultat montre que chaque choix compte !
          </li>
        </ul>
      </Card>
      <p className="text-xs text-gray-400 mt-6 text-center">
        Projet réalisé par l&apos;équipe Hackathon Ynov Sophia – 2024
      </p>
    </Section>
  );
}
