/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
export default function BusinessWebsites() {
  return (
    <div className="App">
      <div class="preloader">
        <div class="loader">
          <div class="ytp-spinner">
            <div class="ytp-spinner-container">
              <div class="ytp-spinner-rotator">
                <div class="ytp-spinner-left">
                  <div class="ytp-spinner-circle"></div>
                </div>
                <div class="ytp-spinner-right">
                  <div class="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="home" class="header_area">
        <div id="header_navbar" class="header_navbar">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="#">
                    <img id="logo" src="assets/images/logo.svg" alt="Logo" />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="page-scroll active" href="#home">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#services">
                          Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#portfolio">
                          Gallery
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#team">
                          Team
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#blog">
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="header_hero">
          <div
            class="single_hero bg_cover d-flex align-items-center"
            style={{ backgroundImage: "url(assets/images/hero.jpg)" }}
          >
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                  <div class="hero_content text-center">
                    <h2
                      class="hero_title wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      Reactjs Bootstrap 5<br /> Website Template
                    </h2>
                    <p
                      class="wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.5s"
                    >
                      A super simple website template based on Reactjs Bootstrap
                      5 and HTML5, comes with all essential <br />
                      elements & features to get started and ready to use for
                      almost any type of business websites.
                    </p>
                    <a
                      href="#features"
                      class="main-btn wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features_area pt-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-25">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Why Choose Us
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-7">
              <div
                class="single_features text-center mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <i class="lni lni-layers"></i>
                <h4 class="features_title">Bootstrap 5 Based</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-7">
              <div
                class="single_features text-center mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <i class="lni lni-layout"></i>
                <h4 class="features_title">Clean Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-7">
              <div
                class="single_features text-center mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                <i class="lni lni-bolt"></i>
                <h4 class="features_title">Cutting-edge Features</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="pt-130">
        <div class="about_area">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="about_content pt-120 pb-130">
                  <div class="section_title pb">
                    <h4
                      class="title wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      About Our Creative Proccess
                    </h4>
                    <p
                      class="wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.4s"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed dianonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et erebum
                    </p>
                    <p
                      class="wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.6s"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore etdolore
                      maali quyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores
                    </p>
                  </div>
                  <a
                    href="#"
                    class="main-btn wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="about_image bg_cover wow fadeInLeft"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
            style={{ backgroundImage: "url(assets/images/about.jpg)" }}
          >
            <div class="image_content">
              <h4 class="experience">
                <span>5</span> Years of Experience
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="features_area pt-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-25">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Our Services
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div
                class="single_features text-center mt-60 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <i class="lni lni-briefcase"></i>
                <h4 class="features_title">Digital Business</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single_features text-center mt-60 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <i class="lni lni-clipboard"></i>
                <h4 class="features_title">Startup Business</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single_features text-center mt-60 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <i class="lni lni-target-revenue"></i>
                <h4 class="features_title">Business Investment</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single_features text-center mt-60 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <i class="lni lni-invention"></i>
                <h4 class="features_title">Business Solutions</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single_features text-center mt-60 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <i class="lni lni-bar-chart"></i>
                <h4 class="features_title">Business Analysis</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="single_features text-center mt-60 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <i class="lni lni-calendar"></i>
                <h4 class="features_title">Consulting Business</h4>
                <p>
                  Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt labor dolore magna .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="portfolio_area pt-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-60">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Our Portfolio
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio_wrapper d-flex flex-wrap">
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <img src="assets/images/portfolio-1.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">Logo And Branding</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.3s"
          >
            <img src="assets/images/portfolio-2.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">Bootstrap 5 Project</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <img src="assets/images/portfolio-3.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">Creative Projects</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.5s"
          >
            <img src="assets/images/portfolio-4.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">UI/UX Projects</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <img src="assets/images/portfolio-5.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">App Development</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.3s"
          >
            <img src="assets/images/portfolio-6.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">Web Development</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <img src="assets/images/portfolio-7.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">Business Card Design</h5>
            </div>
          </div>
          <div
            class="single_portfolio wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.5s"
          >
            <img src="assets/images/portfolio-8.jpg" alt="portfolio" />
            <div class="portfolio_content">
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni lni-link"></i>
                  </a>
                </li>
              </ul>
              <h5 class="portfolio_title">Consulting Business</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="pricing_area pt-120 pb-130">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-25">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Pricing Plans
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-8 col-sm-10">
              <div
                class="single_pricing text-center mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <h4 class="pricing_title">Startup</h4>
                <span class="price">$240</span>
                <ul class="pricing_list">
                  <li>Startup Business</li>
                  <li>Business Consulting</li>
                  <li>Business Analysis</li>
                  <li>Corporate Business</li>
                  <li>Business Investment</li>
                </ul>
                <a href="#" class="mian-btn">
                  Order Now
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-10">
              <div
                class="single_pricing text-center mt-30 active wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <h4 class="pricing_title">Agency</h4>
                <span class="price">$340</span>
                <ul class="pricing_list">
                  <li>Startup Business</li>
                  <li>Business Consulting</li>
                  <li>Business Analysis</li>
                  <li>Corporate Business</li>
                  <li>Business Investment</li>
                </ul>
                <a href="#" class="mian-btn">
                  Order Now
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-10">
              <div
                class="single_pricing text-center mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h4 class="pricing_title">Enterprise</h4>
                <span class="price">$440</span>
                <ul class="pricing_list">
                  <li>Startup Business</li>
                  <li>Business Consulting</li>
                  <li>Business Analysis</li>
                  <li>Corporate Business</li>
                  <li>Business Investment</li>
                </ul>
                <a href="#" class="mian-btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" class="team_area pt-120 pb-130">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-25">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Meet The Team
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center team_active">
            <div class="col-lg-4 col-md-8 col-sm-10">
              <div
                class="single_team mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <img src="assets/images/team-1.jpg" alt="team" />
                <div class="team_content">
                  <h4 class="team_name">
                    <a href="#">Jassa.</a>
                  </h4>
                  <p>Head Of Ideas</p>
                  <ul class="social">
                    <li>
                      <a href="#">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-10">
              <div
                class="single_team mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <img src="assets/images/team-2.jpg" alt="team" />
                <div class="team_content">
                  <h4 class="team_name">
                    <a href="#">Nancy L.</a>
                  </h4>
                  <p>UX Designer</p>
                  <ul class="social">
                    <li>
                      <a href="#">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-10">
              <div
                class="single_team mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src="assets/images/team-3.jpg" alt="team" />
                <div class="team_content">
                  <h4 class="team_name">
                    <a href="#">Michael P.</a>
                  </h4>
                  <p>Creative Designer</p>
                  <ul class="social">
                    <li>
                      <a href="#">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonial"
        class="testimonial_area pt-130 pb-130 bg_cover"
        style={{ backgroundImage: "url(assets/images/testimonial.jpg)" }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="glide testimonial_active">
                <div class="glide__track" data-glide-el="track">
                  <div class="glide__slides">
                    <div class="glide__slide single_testimonial text-center">
                      <img src="assets/images/author-1.jpg" alt="author" />
                      <h5 class="author_name">Linda</h5>
                      <span>UX Specialist, Yoast</span>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren.
                      </p>
                    </div>
                    <div class="glide__slide single_testimonial text-center">
                      <img src="assets/images/author-2.jpg" alt="author" />
                      <h5 class="author_name">Nancy</h5>
                      <span>Sr. Software Engineer</span>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren.
                      </p>
                    </div>
                    <div class="glide__slide single_testimonial text-center">
                      <img src="assets/images/author-3.jpg" alt="author" />
                      <h5 class="author_name">Elon Musk</h5>
                      <span>Creaitve Businessman</span>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                  <button class="glide__bullet" data-glide-dir="=0"></button>
                  <button class="glide__bullet" data-glide-dir="=1"></button>
                  <button class="glide__bullet" data-glide-dir="=2"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="blog_area pt-120 pb-130">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-25">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Recent Blog
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div
                class="single_blog mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div class="blog_image">
                  <img src="assets/images/blog-1.jpg" alt="blog" />
                </div>
                <div class="blog_content">
                  <h3 class="blog_title">
                    <a href="#">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor .
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt labor dolore.Lorem ipsum
                    dolor sit amet, conse sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt labor dolore magna .Lorem ipsum dolor
                    sit amet, consetetur sadipscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div class="blog_image">
                  <img src="assets/images/blog-2.jpg" alt="blog" />
                </div>
                <div class="blog_content media-body">
                  <h3 class="blog_title">
                    <a href="#">
                      Lorem ipsum dolor sit amet, consetetur sadipscing .
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.
                  </p>
                  <a href="#" class="more">
                    Read More
                  </a>
                </div>
              </div>
              <div
                class="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <div class="blog_image">
                  <img src="assets/images/blog-3.jpg" alt="blog" />
                </div>
                <div class="blog_content media-body">
                  <h3 class="blog_title">
                    <a href="#">
                      Lorem ipsum dolor sit amet, consetetur sadipscing .
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.
                  </p>
                  <a href="#" class="more">
                    Read More
                  </a>
                </div>
              </div>
              <div
                class="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <div class="blog_image">
                  <img src="assets/images/blog-4.jpg" alt="blog" />
                </div>
                <div class="blog_content media-body">
                  <h3 class="blog_title">
                    <a href="#">
                      Lorem ipsum dolor sit amet, consetetur sadipscing .
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.
                  </p>
                  <a href="#" class="more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="contact_area bg_cover pt-120 pb-130"
        style={{ backgroundImage: "url(assets/images/contact_bg.jpg)" }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title section_title_2 text-center pb-25">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Contact Us
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.
                </p>
              </div>
            </div>
          </div>
          <form
            id="contact-form"
            action="assets/contact.php"
            method="post"
            class="wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <div class="row">
              <div class="col-lg-6">
                <div class="single_form">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single_form">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single_form">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="number"
                    id="number"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single_form">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single_form">
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
              <p class="form-message"></p>
              <div class="col-lg-12">
                <div class="single_form text-center">
                  <button class="main-btn" type="submit">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer id="footer" class="footer_area">
        <div class="container">
          <div class="footer_wrapper text-center d-lg-flex align-items-center justify-content-between">
            <p class="credit">
              Designed and Developed by{" "}
              <a href="https://therichpost.com/" rel="nofollow">
                Jassa
              </a>
            </p>
            <div class="footer_social pt-15">
              <ul>
                <li>
                  <a href="#">
                    <i class="lni lni-facebook-original"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lni lni-twitter-original"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lni lni-instagram-original"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lni lni-linkedin-original"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" class="back-to-top">
        <i class="lni lni-chevron-up"></i>
      </a>
    </div>
  );
}
