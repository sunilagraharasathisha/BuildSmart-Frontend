import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
      const services = [
        { title: "New Builds",           img: "src/assets/new-builds.webp" },
        { title: "Knockdown Rebuilds",   img: "src/assets/knockdown.webp" },
        { title: "Custom Builds",        img: "src/assets/custom.webp"},
        { title: "Project Management",   img: "src/assets/project.webp" },
      ];
    return (
    <>
          <style>{`
            .hero-section { background-color: #ffffff; }
            .tag-text { font-size: 0.85rem; color: #555; }
            .tag-text span { font-weight: 700; color: #111; }
            .hero-title { font-size: clamp(2.8rem, 6vw, 5rem); font-weight: 400; line-height: 1.1; }
            .text-yellow { color: #f5c518; }
            .hero-image { width: 100%; border-radius: 24px; object-fit: cover; max-height: 420px; }
          `}
          {`


                  .about-img {
                    width: 100%;
                    height: 420px;
                    object-fit: cover;
                    border-radius: 20px;
                  }

                  .about-title {
                    font-size: clamp(2rem, 4vw, 2.8rem);
                    font-weight: 500;
                    line-height: 1.15;
                  }

                  .mission-title, .vision-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 0.4rem;
                  }

                  .mission-text, .vision-text {
                    font-size: 0.88rem;
                    color: #555;
                    line-height: 1.6;
                  }

                  .divider-line {
                    border-top: 1px solid #e5e5e5;
                    margin-top: 3rem;
                  }

                `}</style>

          <section className="hero-section px-3 px-lg-5 pt-4 pb-0">

            {/* Top text + title row */}
            <div className="d-flex flex-wrap align-items-start gap-3 mb-2 justify-content-center">

              {/* Small tag top-left */}
              <div className="tag-text text-center text-lg-end" style={{ minWidth: "130px" }}>
                Best construction <br /> company in <span>India</span>
              </div>

              {/* Big heading */}
              <div className="text-center text-lg-start">
                <h1 className="hero-title mb-0">
                  <span className="text-yellow">Shaping</span> your vision
                </h1>
              </div>
            </div>

            {/* Second line with desc on right */}
            <div className="d-flex flex-wrap align-items-center gap-4 mb-4 justify-content-center">
              <h1 className="hero-title mb-0 text-center text-lg-start">
                With <span className="text-yellow">precision</span>
              </h1>
              <p className="text-muted mb-0 text-center text-lg-start" style={{ maxWidth: "260px", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Delivering construction solutions grounded in commitment, communication, collaboration.
              </p>
            </div>

            {/* Hero Image */}
            <img
              src="src/assets/hero.png"
              alt="Construction site"
              className="hero-image"
            />

          </section>


          <section className="about-section px-3 px-lg-5 py-5" id="about">
              <div className="container-fluid">
                  <div className="row g-4 align-items-center">

                      {/* ── LEFT: Text block ── */}
                      <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
                        <span>About BuildSmart</span>
                        <h2 className="about-title mb-3 pt-2">What We Stand For</h2>
                        <p className="text-muted mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
                          At C5C, we bring together{" "}
                          <strong>Construction, Commitment, Communication, Collaboration, and Customer Success</strong>{" "}
                          to deliver high-quality projects. With a focus on delivering end-to-end solutions, we
                          ensure each phase of construction is handled with precision and professionalism.
                        </p>

                        {/* Founder row */}
                        <div className="d-flex align-items-center gap-3">
                          <div>
                              <div style={{ fontSize: "0.78rem", color: "#888" }}>Founder</div>
                              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Sunil Agrahara Sathisha</div>
                          </div>
                        </div>
                      </div>

                      {/* ── CENTER: Image ── */}
                      <div className="col-12 col-md-6 col-lg-4">
                        <img
                          src="src/assets/about.webp"
                          alt="Construction team"
                          className="about-img"
                        />
                      </div>

                      {/* ── RIGHT: Mission + Vision ── */}
                      <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-4">

                        {/* Circular text ring */}

                        {/* Mission */}
                        <div>
                          <div className="mission-title">Our Mission</div>
                          <p className="mission-text mb-0">
                            To deliver top-quality construction services through trust, communication, and
                            collaboration, always exceeding client expectations.
                          </p>
                        </div>

                        {/* Divider */}
                        <hr className="my-0" style={{ borderColor: "#eee" }} />

                        {/* Vision */}
                        <div>
                          <div className="vision-title">Our Vision</div>
                          <p className="vision-text mb-0">
                            To be Sydney's leading construction partner by providing innovative, reliable,
                            and customer-focused solutions.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="divider-line" />
                </section>

  <section className="py-2 bg-white pb-lg-5" id="services">

      {/* Heading */}
      <div className="text-center mb-5 px-3">
        <h2 className="fw-semibold fs-1">
          <span style={{ color: "#f5c518" }}>Our</span> Services
        </h2>
        <p className="text-muted mx-auto mt-2" style={{ maxWidth: 420, fontSize: "0.9rem" }}>
          We offer a comprehensive range of construction services designed to meet your needs
        </p>
      </div>

      {/* 4 equal cards in one straight row */}
      <div className="container-fluid px-4">
        <div className="row g-3">
          {services.map((s, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="position-relative rounded-4 overflow-hidden" style={{ height: 300 }}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-100 h-100 object-fit-cover"
                />
                <span
                  className="position-absolute bottom-0 start-50 translate-middle-x mb-3 bg-white rounded-pill px-3 py-1 fw-medium text-dark"
                  style={{ fontSize: "0.82rem", whiteSpace: "nowrap", opacity: 0.93 }}
                >
                  {s.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

      {/* ── CTA BAND ── */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg, #f7a21e 0%, #f5c518 80%)' }}
      >
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-2">Ready to Digitalize Your Construction Projects?</h2>
          <p className="text-dark mb-4" style={{ opacity: 0.75 }}>
            Join 120+ companies that trust BuildSmart to manage their construction operations.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-dark btn-lg px-5 fw-semibold">
              Get a Free Demo
            </Link>
            <Link to="/services" className="btn btn-outline-dark btn-lg px-5">
              Explore Services
            </Link>
          </div>
        </div>
      </section>


    </>
  );
};

export default HomePage;