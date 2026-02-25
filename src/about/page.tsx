import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const About = () => {
    return (
      <div className="app-shell">
        <Header />
        <main className="page">
          <div className="container">
            <header className="page__header">
              <h1 className="page__title">About</h1>
              <p className="page__lead">A short description of what this site is about.</p>
            </header>

            <section className="card">
              <h2 className="card__title">What we do</h2>
              <p className="muted">
                This project is a learning app built with React + Vite and React Router.
              </p>
            </section>
          </div>
        </main>
        <Footer />  
      </div>
    );
  }