import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import '../styles/heroes.css';

export default function App({ Component, pageProps }) {
  return (
      <div>
        <div className="container py-3">
          <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">Real Estate dapp</span>
              </a>
              <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a className="me-3 py-2 text-dark text-decoration-none" href="#">Listed Properties</a>
                <a className="me-3 py-2 text-dark text-decoration-none" href="#">List Your Property</a>
              </nav>
            </div>
          </header>
          <Component {...pageProps} />
        </div>
      </div>
  )
}
