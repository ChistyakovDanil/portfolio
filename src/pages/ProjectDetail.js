import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import projects from '../helpers/projectsList';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title">{project.title}</h1>

          <img src={project.img} alt="" className="project-details__cover" />

          <div className="project-details__desc">{project.skills}</div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
