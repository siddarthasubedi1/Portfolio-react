import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="page">
        <div className="container">
          <header className="page__header">
            <h1 className="page__title">Home</h1>
            <p className="page__lead">Welcome! This is a simple multi-page React app.</p>
          </header>

          <section className="card">
            <h2 className="card__title">Quick links</h2>
            <p className="muted">Use the navigation above to visit About, Contact, and Blog.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
