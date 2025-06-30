"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/section";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Section className="bg-transparent shadow-none rounded-none py-0">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Title level={1} className="text-center mb-1">
            Imagine ta ville du futur
          </Title>
          <Subtitle className="text-center mb-2">
            Construis une ville écologique et découvre son impact grâce à
            l&apos;IA.
            <br />
            Fais tes choix, influence le résultat, et partage ta vision
            d&apos;une Smart City durable !
          </Subtitle>
          <Link href="/question/1" passHref>
            <Button className="text-base md:text-lg px-8 py-4 mt-2 rounded-full">
              Commencer
            </Button>
          </Link>
        </motion.div>
      </Section>
    </main>
  );
}
