import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Pieshefski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-extrabold">Alex Pieshefski</div>

      <div className="flex justify-center">
        <div className="grid gap-x-8 gap-y-4 grid-cols-2">
          <div>
            <img alt="Python" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </div>
          <div>
            <img alt="Typescript" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
          </div>
          <div>
            <img alt="HTML" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
          </div>
          <div>
            <img alt="SASS" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          </div>
          <div>
            <img alt="Javascript" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          </div>
          <div>
            <img alt="React" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </div>
          <div>
            <img alt="NextJS" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          </div>
          <div>
            <img alt="Java" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
          </div>
          <div>
            <img alt="MySQL" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </div>
          <div>
            <img alt="MongoDB" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
          </div>
          <div>
            <img alt="Jenkins" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" />
          </div>
          <div>
            <img alt="Docker" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
          </div>
          <div>
            <img alt="Git" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
          </div>
          <div>
            <img alt="VSCode" width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
          </div>
        </div>
      </div>
      
      
      <footer>
        <div className="flex justify-center space-x-6">
          <img align="left" width="25px" alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <img align="left" width="25px" alt="Linkdin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
        </div>
      </footer>
      
    </div>
  )
}
