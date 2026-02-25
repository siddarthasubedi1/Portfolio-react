import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Contact = () => {
    return (
      <div className="app-shell">
        <Header />
        <main className="page">
          <div className="container">
            <header className="page__header">
              <h1 className="page__title">Contact</h1>
              <p className="page__lead">Reach out if you have questions.</p>
            </header>

            <section className="card">
              <h2 className="card__title">Email</h2>
              <p className="muted">contact@example.com</p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }