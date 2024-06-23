import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { mailOutline, logoLinkedin, checkmarkOutline, homeOutline } from "ionicons/icons";

export default function Component() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="px-4 lg:px-6 h-14 d-flex align-items-center">
        <Link to="#" className="d-flex align-items-center justify-center" prefetch={false}>
          <IonIcon icon={homeOutline} className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ms-auto d-flex gap-4">
          <Link to="#" className="text-sm font-medium hover-underline" prefetch={false}>
            Home
          </Link>
          <Link to="#" className="text-sm font-medium hover-underline" prefetch={false}>
            Projects
          </Link>
          <Link to="#" className="text-sm font-medium hover-underline" prefetch={false}>
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
          </div>
        </section>
        <section className="w-100 py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <ul className="grid gap-4">
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">JavaScript</h3>
                    <p className="text-muted">
                      Proficient in JavaScript for both front-end and back-end development.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">React</h3>
                    <p className="text-muted">
                      Experienced in building React applications.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Expo</h3>
                    <p className="text-muted">
                      Using Expo to create mobile applications.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Express</h3>
                    <p className="text-muted">
                      Building APIs with Express framework.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-4">
                  <IonIcon icon={checkmarkOutline} className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Node.js</h3>
                    <p className="text-muted">
                      Experienced in server-side development with Node.js.
                    </p>
                  </div>
                </li>
              </ul>
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
                  <IonIcon icon={logoLinkedin} className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">LinkedIn</h3>
                  <p className="text-muted text-center">linkedin.com/in/johndoe</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
