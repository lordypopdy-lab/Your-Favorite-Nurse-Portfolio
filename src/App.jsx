import { useState } from 'react'

function App() {

  return (
    <div className="top">
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item"><a href="mailto:support@esthersportfolio.com"><i className="icofont-support-faq mr-2"></i>support@esthersportfolio.com</a></li>
                  <li className="list-inline-item"><i class="icofont-location-pin"></i>Address Ta-134/A, New York, USA </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                  <a href="tel:+23-345-67890" >
                    <span>Call Now : </span>
                    <span className="h4">823-4565-13456</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="./logo/ESTHER’S.png" alt="" className="img-fluid" />
            </a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icofont-navigation-menu"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#values">Values</a></li>

                <li className='nav-item'><a className="nav-link" href="#Appoinment">Appoinment</a></li>
                <li className='nav-item'><a className="nav-link" href="#Artifacts">Artifacts</a></li>

                <li className="nav-item"><a className="nav-link" href="#Appoinment">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>




      {/* Slider Start  */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                <h1 className="mb-3 mt-3">ESTHER'S nursing portfolio.</h1>

                <p className="mb-4 pr-5">"As a nurse, we have the opportunity to heal the heart, mind, soul and body of our patients, their family and ourselves. They may not remember your name but they will never forget the way you made them feel"</p>
                <div className="btn-container ">
                  <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">ESTHER MOMSON <i className="icofont-simple-right ml-2  "></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className="section about">
        <div className="container">
          <h3 className="title-color text-center">My Philosophy</h3>
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <img src="https://technext.github.io/novena/images/about/img-1.jpg" alt="" className="img-fluid" />
                <img src="https://technext.github.io/novena/images/about/img-2.jpg" alt="" className="img-fluid mt-4" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <img src="https://technext.github.io/novena/images/about/img-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">Hi, my name is Esther Momson, I am a nurse Working in (More Info..)</h2>
                <h4 className="title-color mt-4">My Philosophy and Beliefs of Nursing</h4>
                <p className="mb-5">  Nurses are caring, passionate, hard working and play an important role in healthcare.
                  For me, a nurse means being selfless, kind, dedicated and strong. Throughout a nurse's career,
                  they will be exposed to many happy moments but also many challenges.</p>
              </div>
            </div>
            <p className="mt-2 p-4">
              Throughout these challenges,
              nurses need to face adversity and ensure they have effective coping mechanisms to aid their
              own health. Another important aspect of nursing is effective communication and collaboration
              with peers and patients. I think that being able to work as a team is a very important skill
              in nursing to essentially provide quality care for patients. Furthermore, nurse-patient
              relationships are a large component of quality care; these components include equality,
              cultural implications, respect, etc. In nursing it is important to understand and apply
              these characteristics and skills into the workplace all while following the code of ethics
              and implementing proper nursing practice.

              I chose nursing as a career because I have a need to care for people.
              Furthermore, I have a sense of leadership, high communication skills, I am empathetic,
              and like to bring positivity into my surroundings through my humour and happy personality.
              In addition, I have earned a bachelor's degree in Neuroscience and Mental Health prior to
              entering nursing school. After my degree I wanted to use the knowledge and skills learnt and
              apply them to helping individuals in the healthcare profession. With my background and my desire
              to help, I believe that I can develop the proper nursing skills, be a great team member,
              and provide quality care to patients.
            </p>
          </div>
        </div>
      </section>

      <section style={{marginTop: "-18%"}} id='values' className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>My Values</h2>
                <div className="divider mx-auto my-4"></div>
                <h5 className='title-color'>Four personal values that align with my style of nursing.</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-laboratory text-md"></i>
                  <h4 className="mt-3 mb-3">Accountability</h4>
                </div>

                <div className="content">
                  <p className="mb-4">Accountability is the ability to take responsibility for one’s actions. I think being accountable aligns with my core values because I am an honest person who wants to provide quality care while following the code of ethics.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-heart-beat-alt text-md"></i>
                  <h4 className="mt-3 mb-3">Promote Health & Wellbeing</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Promoting health and wellbeing is the ability to provide positive resources and tools to those in need. I believe that promoting health and wellbeing is an important value to have because it provides positivity and good health behaviours in the workplace and in care.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-crutch text-md"></i>
                  <h4 className="mt-3 mb-3">Leadership</h4>
                </div>

                <div className="content">
                  <p className="mb-4">Leadership is when one or multiple individuals have the ability to impact, guide and motivate those surrounding them. Leadership is one of my core values because I find many leadership qualities in myself. I like to demonstrate proper care, have good communication/ collaborative skills with peers and provide motivation to achieve tasks.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-dna-alt-1 text-lg"></i>
                  <h4 className="mt-3 mb-3">Justice</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Justice is the ability to treat everyone with equal treatment and fairness. Having a value such as justice in the workplace is very important nowadays, given the high rates of diversity and cultures in Canada. I believe it is important to treat everyone with the same morals and level of care, to be able to achieve justice in the workplace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section testimonial-2 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>SMART goals</h2>
                <div className="divider mx-auto my-4"></div>
                <p>During my clinical placement in 2025, I will be giving myself 2 SMART goals that will be set to be accomplished by the end of the 2025 winter semester. My two SMART goals involve organization and patient assessments.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 testimonial-wrap-2">
              <div className="testimonial-block style-2  gray-bg">
                <i className="icofont-quote-right"></i>
                <div className="client-info ">
                  <p>
                  By the end of the 1020 clinical placement, I want to be able to improve my organizational skills. In clinical placements, it is important to organize your time, documents, and patients to be able to work efficiently and effectively.
                  </p>
                </div>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="client-info">
                  <p>
                  I will achieve this goal by preparing my assignments and documents before class and inputing important dates and study sessions into my calendar. Organization is a skill that can be beneficial with my studies, in the workplace and in everyday chores.
                  </p>
                </div>

                <i className="icofont-quote-right"></i>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="client-info">
                  <p>
                  By the end of the 1020 clinical placement, I want to gain the ability to perform head-to-toe assessments on multiple patients. Head-to-toe assessments are critical in every nursing position and I want to be able to perform this task with perfection and without help.
                  </p>
                </div>

                <i className="icofont-quote-right"></i>
              </div>

              <div className="testimonial-block style-2  gray-bg">
                <div className="client-info">
                  <p className="mt-4">
                  I will achieve this goal by implementing study sessions in my schedule before placement to review each head-to-toe assessment. In placement, I will practice implementing my learning with the patients and practice charting their values. By mastering this skill, I will be more prepared for future placements and classes.
                  </p>
                </div>
                <i className="icofont-quote-right"></i>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id='Artifacts' className="section appoinment">
        <div className="container">
        <h2 className="mb-4 title-color text-center">Artifacts</h2>
          <div className="row align-items-center">
            <div className="col-sm-6 ">
              <div className="appoinment-content">
                <img src="https://technext.github.io/novena/images/about/img-1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <img src="https://technext.github.io/novena/images/about/img-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <img src="https://technext.github.io/novena/images/about/img-2.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <img src="https://technext.github.io/novena/images/about/img-1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='Appoinment' className="features mt-4">
        <div className="container">
        <h2 className="mb-4 title-color text-center">Book An Online Appoinment!</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-surgeon-alt"></i>
                  </div>
                  <span>24 Hours Service</span>
                  <h4 className="mb-3">Online Appoinment</h4>
                  <p className="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                  <a href="appoinment.html" className="btn btn-main btn-round-full">Make a appoinment</a>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-ui-clock"></i>
                  </div>
                  <span>Timing schedule</span>
                  <h4 className="mb-3">Working Hours</h4>
                  <ul className="w-hours list-unstyled">
                    <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                    <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                    <li className="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
                  </ul>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont-support"></i>
                  </div>
                  <span>Emegency Cases</span>
                  <h4 className="mb-3">1-800-700-6200</h4>
                  <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer Start */}
      <footer className="footer section gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mr-auto col-sm-6">
              <div className="widget mb-5 mb-lg-0">
                <div className="logo mb-4">
                  <img src="./logo/ESTHER’S.png" alt="" className="img-fluid" />
                </div>
                <p>Empathy and excellence define my approach to nursing care. With a commitment to patient well-being, I strive to provide compassionate support, clear communication, and evidence-based practices. Collaboration with healthcare teams ensures holistic and personalized care for every individual.</p>

                <ul className="list-inline footer-socials mt-4">
                  <li className="list-inline-item"><a href="#"><i className="icofont-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="icofont-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="icofont-linkedin"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget mb-5 mb-lg-0">
                <h4 className="text-capitalize mb-3">Support</h4>
                <div className="divider mb-4"></div>

                <ul className="list-unstyled footer-menu lh-35">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Company Support </a></li>
                  <li><a href="#">FAQuestions</a></li>
                  <li><a href="#">Company Licence</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-contact mb-5 mb-lg-0">
                <h4 className="text-capitalize mb-3">Get in Touch</h4>
                <div className="divider mb-4"></div>

                <div className="footer-contact-block mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-email mr-3"></i>
                    <span className="h6 mb-0">Support Available for 24/7</span>
                  </div>
                  <h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
                </div>

                <div className="footer-contact-block">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-support mr-3"></i>
                    <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                  </div>
                  <h4 className="mt-2"><a href="tel:+23-345-67890">+23-456-6588</a></h4>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-btm py-4 mt-5">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="copyright">
                  &copy; Copyright Reserved to <span className="text-color">Esther's Porfolio</span> by <a href="/" target="_blank">JamesDev</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                  <form action="#" className="subscribe">
                    <input type="text" className="form-control" placeholder="Your Email address" />
                    <a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <a className="backtop js-scroll-trigger" href="#top">
                  <i className="icofont-long-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="copyright text-lg-center">
            Disign by <a href="/" target="_blank">JamesDev</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
