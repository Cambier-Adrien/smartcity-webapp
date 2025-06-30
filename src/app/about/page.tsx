import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Section className="gap-8">
      <Title level={1}>À propos du projet</Title>
      <div className="flex justify-center items-center bg-transparent backdrop-blur py-2 px-4 rounded-xl">
        <p className="text-base text-white text-center">
          <strong>Imagine ta ville</strong> est une expérience interactive créée
          lors du hackathon &quot;IA for Good&quot;. L&apos;objectif :
          sensibiliser à l&apos;écologie urbaine en montrant l&apos;impact de
          nos choix sur la ville du futur.
        </p>
      </div>
      <Card>
        <Title level={3}>Notre démarche</Title>

        <ul className="list-disc pl-6 text-base text-gray-700">
          <li>
            Chaque étape met en avant un enjeu concret de la Smart City :
            mobilité, énergie, nature, IA.
          </li>
          <li>
            Les choix de l&apos;utilisateur influencent le score écologique et
            la vision finale de la ville.
          </li>
          <li>
            Le résultat est généré par l&apos;IA : image stylisée, score, slogan
            personnalisé.
          </li>
        </ul>
      </Card>
      <Card>
        <Title level={3}>Notre réflexion critique</Title>
        <ul className="list-disc pl-6 text-base text-gray-700">
          <li>
            L&apos;IA peut être un outil puissant pour l&apos;écologie, mais
            elle pose aussi des questions éthiques (surveillance, vie privée,
            etc.).
          </li>
          <li>
            Ce projet invite à réfléchir à l&apos;équilibre entre technologie,
            environnement et qualité de vie.
          </li>
          <li>
            La personnalisation du résultat montre que chaque choix compte !
          </li>
        </ul>
      </Card>
      <div className="flex justify-center items-center bg-transparent backdrop-blur py-2 px-4 rounded-full">
        <p className="text-xs text-white text-center">
          Projet réalisé par l&apos;équipe Hackathon Ynov Sophia – 2024
        </p>
      </div>
    </Section>
  );
}
