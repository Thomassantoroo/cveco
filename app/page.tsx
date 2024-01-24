import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>
          CV de Thomas Santoro
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/photo.jpg"
              alt="Photo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <p>
        Bonjour je suis thomas santoro j ai 20 ans, je suis en 3 ème année de BUT à l IUT de lens.<br/>
        Je suis en alternance chez IBM en tant que développeur adélia.<br/>
        <br/>
        
          Pour mes compétences j ai le niveau scolaire en :<br/>
          java php python sql anglais
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://gitlab.univ-artois.fr/3e-annee/manifesteagile-microprofile-maven-project-Jules-Thomas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Projet virtu{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lien vers le projet de virtu
          </p>
        </a>

        <a
          href="https://gitlab.univ-artois.fr/3e-annee/spring-project-bobeuf-santoro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Projet spring{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lien vers le projet spring
          </p>
        </a>

        <a
          href="https://gitlab.univ-artois.fr/3e-annee/manifesteagile-microprofile-maven-project-Jules-Thomas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Cliquer ici pour retrouver mon linkedin
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Ou contactez moi pas mail : thomas.santoro01@gmail.com
          </p>
        </a>
      </div>
    </main>
  );
}
