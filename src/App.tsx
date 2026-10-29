import { ProjectCard } from './components/ProjectCard'
import { profile } from './data/profile'
import { projects } from './data/projects'

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#trang-chu">{profile.name}</a>
          <nav aria-label="Điều hướng chính">
            <a href="#gioi-thieu">Giới thiệu</a>
            <a href="#du-an">Dự án</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
        </div>
      </header>

      <main id="trang-chu" className="container">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">KHÔNG GIAN CỦA MÌNH</p>
          <h1 id="hero-title">Xin chào, mình là <span>{profile.name}.</span></h1>
          <p className="intro">{profile.introduction}</p>
          <a className="button" href="#du-an">Khám phá dự án <span aria-hidden="true">↓</span></a>
        </section>

        <section id="gioi-thieu" className="section" aria-labelledby="about-title">
          <p className="eyebrow">01 / GIỚI THIỆU</p>
          <h2 id="about-title">Một chút về mình</h2>
          <p>{profile.about}</p>
        </section>

        <section id="du-an" className="section" aria-labelledby="projects-title">
          <p className="eyebrow">02 / DỰ ÁN</p>
          <h2 id="projects-title">Những gì mình đã làm</h2>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} />)}
          </div>
        </section>

        <section id="lien-he" className="section" aria-labelledby="contact-title">
          <p className="eyebrow">03 / LIÊN HỆ</p>
          <h2 id="contact-title">Cùng kết nối nhé</h2>
          <p>Bạn có thể liên hệ với mình qua email.</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>
      </main>

      <footer className="container footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
