import Head from "next/head";
import Footer from "../components/Footer";
import Skills from "../components/Skill";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Pieshefski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <br />
      <p className="flex justify-center font-sans">Languages</p>

      <div className="flex justify-center">
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          <Skills
            alt="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <Skills
            alt="Typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          />
          <Skills
            alt="HTML"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          />
          <Skills
            alt="SASS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
          <Skills
            alt="Javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          />
          <Skills
            alt="Java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          />
        </div>
      </div>

      <br />
      <p className="flex justify-center font-sans">Frameworks</p>

      <div className="flex justify-center">
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          <Skills
            alt="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <Skills
            alt="NextJS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <Skills
            alt="Angular"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
          />
        </div>
      </div>

      <br />
      <p className="flex justify-center font-sans">Database</p>

      <div className="flex justify-center">
        <div className="grid gap-x-8 gap-y-4 grid-cols-2">
          <Skills
            alt="MySQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />
          <Skills
            alt="MongoDB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          />
        </div>
      </div>

      <br />
      <p className="flex justify-center font-sans">Devops</p>

      <div className="flex justify-center">
        <div className="grid gap-x-8 gap-y-4 grid-cols-4">
          <Skills
            alt="Jenkins"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
          />
          <Skills
            alt="Docker"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
          />
          <Skills
            alt="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
          />
          <Skills
            alt="VSCode"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
