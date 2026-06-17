import { useEffect, useRef } from "react";
import { skills, experiences, achievements } from "../constants";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const About = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    timelineRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="max-container pt-28">
          <h1 className="head-text">
            Hello, I'm{" "}
            <span className="blue-gradient_text">
              Ansh Saini
            </span>
          </h1>

          <p className="mt-4 text-slate-500 max-w-3xl">
            Bridging technology and management through web development, data analytics, business operations, and problem-solving to create impactful real-world solutions.
          </p>

          {/* Skills */}
          <div className="py-14">
            <h3 className="subhead-text">Skills</h3>

            <div className="mt-12 flex flex-wrap gap-10">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="block-container w-20 h-20"
                >
                  <div className="btn-back rounded-xl" />

                  <div className="btn-front rounded-xl flex items-center justify-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className={`object-contain ${
                        [
                          "Microsoft Word",
                          "Microsoft Excel",
                          "Microsoft PowerPoint",
                        ].includes(skill.name)
                          ? "w-14 h-14"
                          : "w-1/2 h-1/2"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="py-16">
            <h3 className="subhead-text">
              Achievements
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="bg-white rounded-xl shadow-lg p-6 border border-slate-200"
                >
                  <h4 className="font-bold text-lg">
                    {achievement.title}
                  </h4>

                  <p className="text-blue-500 mt-1">
                    {achievement.organization}
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    {achievement.date}
                  </p>

                  <p className="text-slate-600 mt-3">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="py-16">
            <h3 className="subhead-text">
              Education & Experience
            </h3>

            <div className="timeline-wrapper">
              <span className="timeline-line" />

              {experiences.map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) =>
                    (timelineRefs.current[index] = el)
                  }
                  className={`timeline-item ${
                    index % 2 === 0
                      ? "left"
                      : "right"
                  }`}
                >
                  <span className="timeline-dot" />

                  <div className="timeline-card">
                    <h4>{item.title}</h4>

                    <p className="meta">
                      {item.company_name} · {item.date}
                    </p>

                    <ul>
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;