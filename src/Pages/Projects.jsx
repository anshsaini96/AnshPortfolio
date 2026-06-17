import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { projects } from "../constants";
import { arrow, github } from "../assets/icons";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="max-container pt-28">
          <h1 className="head-text">
            My{" "}
            <span className="blue-gradient_text drop-shadow font-semibold">
              Projects
            </span>
          </h1>

          <p className="text-slate-500 mt-4 max-w-3xl leading-relaxed">
            These projects reflect my continuous learning journey and hands-on
            experience in building real-world applications. I actively
            experiment with new technologies, improve UI/UX, and refine
            performance with every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-20">
            {projects.map((project) => (
              <div
                key={project.name}
                className="project-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="block-container w-16 h-16 project-icon">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-2/3 h-2/3 object-contain"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h4>

                  <p className="mt-3 text-slate-500 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 mt-5 flex-wrap">

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-500"
                      >
                        <span>View Project</span>
                        <img
                          src={arrow}
                          alt="arrow"
                          className="w-4 h-4 object-contain"
                        />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold text-slate-700 hover:text-black"
                      >
                        <img
                          src={github}
                          alt="github"
                          className="w-5 h-5"
                        />
                        <span>GitHub</span>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>

          <CTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;