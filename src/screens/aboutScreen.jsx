import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { mailOutline, callOutline, logoLinkedin, checkmarkOutline, homeOutline,} from "ionicons/icons";

export default function Component() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="px-4 lg:px-6 h-14 d-flex align-items-center">
        <Link href="#" className="d-flex align-items-center justify-center" prefetch={false}>
          <IonIcon icon={homeOutline} className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ms-auto d-flex gap-4">
          <Link href="#" className="text-sm font-medium hover-underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover-underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover-underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="d-flex flex-column align-items-start justify-center space-y-4">
              <div className="rounded-circle overflow-hidden" style={{ width: "100px", height: "100px" }}>
                <img src="/placeholder-user.jpg" alt="User Avatar" className="img-fluid" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Kenneth Adjei-Mensah</h1>
              <p className="max-w-600px text-muted md:text-xl">
                I'm a passionate software engineer with over 2 years of experience in the industry. I specialize in
                building scalable and secure web applications using the latest technologies. My goal is to create
                innovative solutions that empower businesses to achieve their digital transformation goals.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-ratio-16x9 rounded-xl object-cover sm:w-100 lg:order-last lg:aspect-ratio-1x1"
            />
          </div>
        </section>
        <section className="w-100 py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-600px text-muted md:text-xl">
                I'm a software engineer with a passion for building innovative web applications. I have a strong
                background in full-stack development, with expertise in technologies like React, Node.js, and MongoDB.
                I'm always eager to learn new skills and stay up-to-date with the latest industry trends.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <ul className="grid gap-4">
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Front-end Development</h3>
                    <p className="text-muted">
                      Proficient in React, JavaScript, HTML, and CSS. Experienced in building responsive and
                      user-friendly web applications.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Back-end Development</h3>
                    <p className="text-muted">
                      Skilled in Node.js, Express, and MongoDB. Experienced in building scalable and secure APIs.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">DevOps</h3>
                    <p className="text-muted">
                      Familiar with cloud platforms like AWS and Azure. Experienced in setting up CI/CD pipelines and
                      automating deployment processes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="max-w-600px text-muted md:text-xl">
                Here are some of the projects I've worked on:
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4">
                  <img src="/placeholder.svg" width="300" height="200" alt="Project 1" className="rounded-lg img-fluid" />
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p className="text-muted">A web application for managing customer data.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4">
                  <img src="/placeholder.svg" width="300" height="200" alt="Project 2" className="rounded-lg img-fluid" />
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold">Project 2</h3>
                    <p className="text-muted">A mobile app for tracking fitness activities.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4">
                  <img src="/placeholder.svg" width="300" height="200" alt="Project 3" className="rounded-lg img-fluid" />
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold">Project 3</h3>
                    <p className="text-muted">A web-based dashboard for monitoring sales data.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4">
                  <img src="/placeholder.svg" width="300" height="200" alt="Project 4" className="rounded-lg img-fluid" />
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold">Project 4</h3>
                    <p className="text-muted">A web application for managing employee records.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-100 py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
              <p className="max-w-600px text-muted md:text-xl">
                Feel free to reach out if you have any questions or would like to discuss a potential project.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4 bg-light p-6 rounded-lg">
                  <IonIcon icon={mailOutline} className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted text-center">kenadjei20@gmail.com</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4 bg-light p-6 rounded-lg">
                  <IonIcon icon={callOutline} className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-muted text-center">+233 20 903 7926 / +233 53 494 8445</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 mb-4">
                <div className="d-flex flex-column align-items-center space-y-4 bg-light p-6 rounded-lg">
                  <IonIcon icon={logoLinkedin} className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">LinkedIn</h3>
                  <p className="text-muted text-center">linkedin.com/in/johndoe</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="d-flex flex-column gap-2 sm:flex-row py-6 w-100 align-items-center px-4 md:px-6 border-top">
        <p className="text-xs text-muted">&copy; 2024 Kenneth Adjei-Mensah. All rights reserved.</p>
        <nav className="ms-auto d-flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover-underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover-underline" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
