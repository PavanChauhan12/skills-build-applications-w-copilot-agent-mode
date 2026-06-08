import { Link, Route, Routes } from 'react-router-dom';

const featureCards = [
  {
    title: 'Training activity',
    description: 'Log workouts, monitor consistency, and keep a clear record of progress over time.',
  },
  {
    title: 'Team competition',
    description: 'Build teams, compare scores, and keep the leaderboard active for every session.',
  },
  {
    title: 'Personal guidance',
    description: 'Surface personalized workout suggestions that adapt to the user profile and goals.',
  },
];

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero container py-5 py-lg-6">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="eyebrow">OctoFit Tracker</span>
            <h1 className="display-4 fw-bold mt-3">A focused multi-tier fitness platform for teams, goals, and momentum.</h1>
            <p className="lead text-secondary mt-4">
              React 19 and Vite power the presentation tier, while the backend is ready for Express,
              TypeScript, and MongoDB-backed services.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/dashboard" className="btn btn-primary btn-lg px-4">
                Open dashboard
              </Link>
              <a className="btn btn-outline-light btn-lg px-4" href="#capabilities">
                View capabilities
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-card shadow-lg">
              <img className="hero-logo" src="/octofitapp-small.png" alt="OctoFit Tracker logo" />
              <div className="mt-4">
                <p className="text-uppercase text-muted small mb-2">Platform focus</p>
                <h2 className="h3 fw-semibold">Authentication, tracking, teams, and leaderboards</h2>
                <p className="text-secondary mb-0">
                  The initial scaffold is structured so API endpoints, models, and UI routes can grow cleanly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="container pb-5 pb-lg-6">
        <div className="row g-4">
          {featureCards.map((card) => (
            <div className="col-md-4" key={card.title}>
              <article className="feature-card h-100">
                <h3 className="h5 fw-semibold">{card.title}</h3>
                <p className="text-secondary mb-0">{card.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function DashboardPage() {
  return (
    <main className="container py-5 py-lg-6">
      <div className="dashboard-panel shadow-lg">
        <p className="eyebrow mb-2">Dashboard</p>
        <h1 className="h2 fw-bold">Frontend scaffold is ready.</h1>
        <p className="text-secondary mb-0">
          Connect this view to the backend API once authentication, activity logging, and leaderboard routes are ready.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
