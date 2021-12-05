import React, { useCallback } from "react";
import Header from './components/header';
import AboutMe from './components/about-me';
import ProjectCard from './components/project-card';

function App() {

  const visitProject = useCallback(
    () => {
      console.log("entrou");
      alert("visited the link");
    },
    []
  );

  return (
    <div>
      <Header />
      <AboutMe />
      <ProjectCard
        project={{
          title: "task-organizer",
          image: "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/can-task-be-a-verb-5813-7075c71d8cf734c3c83e9edf76bc66fb@1x.jpg",
          description: "The best task organizer ever",
        }}
        visitProject={visitProject}
      />
    </div>
  );
}

export default App;
