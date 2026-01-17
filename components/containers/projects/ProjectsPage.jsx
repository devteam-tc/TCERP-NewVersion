import { projectSingle } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

const ProjectsPage = () => {
  return (
    <>
      <section className="ep-project-section pt-120">
      <div className="container">
        <div className="row g-4">
          {projectSingle.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="project-item position-relative">
                <div className="img reveal zoom-out overflow-hidden rounded-20">
                  <Link href="/project-details" className="d-block w-100">
                    <Image loading="lazy" src={project.image} alt="project-img" className="img-fluid w-100" />
                  </Link>
                </div>
                <div className="overlay position-absolute">
                  <div className="text">
                    <p>{project.category}</p>
                    <h4 className="title">
                      <Link href="/project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default ProjectsPage
