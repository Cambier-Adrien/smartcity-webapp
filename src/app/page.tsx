"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <Section className="bg-transparent shadow-none rounded-none py-0">
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Title level={1}>Imagine ta ville</Title>
        <div className="flex flex-col items-center gap-2 bg-white/60 backdrop-blur px-6 py-4 rounded-xl custom-shadow">
          <p className="text-base text-gray-700 text-center">
            <strong>Quiz interactif</strong> : 6 questions simples pour
            &eacute;valuer la transition &eacute;cologique et intelligente de ta
            ville.
            <br />
            <strong>Carte anim&eacute;e</strong> : un fond visuel immersif pour
            explorer la SmartCity.
            <br />
            <strong>R&eacute;sultat personnalis&eacute;</strong> : score, slogan
            et image g&eacute;n&eacute;r&eacute;s par l&apos;IA selon tes choix.
          </p>
        </div>
        <Link href="/question/1" passHref>
          <Button className="mt-4">Lancer le quiz</Button>
        </Link>
        <div className="flex justify-center items-center bg-transparent backdrop-blur py-2 px-4 rounded-full">
          <p className="text-xs text-white text-center">
            BOUFFARD PICARD Cl&eacute;ment &middot; BROCCOLICHI Kylian &middot;
            CAMBIER Adrien &middot; HANSEN Lise
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
