import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

//importing mui lib

import Button from "@mui/material/Button";
import WavingHandIcon from "@mui/icons-material/WavingHand";

//import components and files
import "../../Styles/Home.css";
import Topbar from "../../Components/Navbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

function Home() {
  const [text] = useTypewriter({
    words: ["Developer", "UI/UX Designer", "Photographer", "YouTuber"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <Topbar />

      <div className="bio_data">
        <div className="user_bio">
          <h1>Hello Abhinab Sarkar Here </h1>
          <h1>
            I'm a <span>{text}</span>
            <span style={{ color: "white" }}>
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <Button className="talk" variant="contained">
            Let's Talk
          </Button>
        </div>
      </div>

      {/* tech showcase */}

      <div className="tech">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          <h2>My Tech Stack</h2>
        </div>

        <div className="tech_icons">
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
            alt="Html"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png"
            alt="css"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png"
            alt="javascript"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
            alt="react"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"
            alt="redux"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
            alt="tailwaind"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png"
            alt="figma"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png"
            alt="node"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/express_original_logo_icon_146527.png"
            alt="express"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sql_icon_130152.png"
            alt="sql"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
          <img
            className="tech_png"
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_mongo_icon_130383.png"
            alt="mongo"
            style={{ width: "50px", height: "50px", gap: "1em" }}
          />
        </div>
      </div>

      {/* user info */}

      <div className="user_info">
        <h2>About Me</h2>
        <div className="About_me">
          <div className="Bio_pic">
            <img
              src="https://cdn.icon-icons.com/icons2/3767/PNG/512/sphere_ball_icon_231509.png"
              alt="sphere"
            />
          </div>
          <div className="Bio">
            <h3>I'm a Front-end Developer with 1 years of experience.</h3>
            <p>
              I'm a Front-end Developer with over 1 years of experience. I'm
              from India. I code and create web elements for companies & amazing
              people around the world. I like work with new people. New people
              new Experiences.I actively participated in redesigning the user
              interface of our core platform using HTML, CSS, and JavaScript,
              resulting in an enhanced user experience and a 20% increase in
              user engagement within the first month. Leveraging my
              problem-solving skills, I resolved critical UI/UX issues, ensuring
              a seamless browsing experience for users across devices.
            </p>

            <div className="counter">
              <div className="Bio_counts">
                <div className="strike">
                  <span>6 +</span>
                  <p>Projects</p>
                </div>
                <div className="strike">
                  <span>90 +</span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="Bio_buttons">
                <Button className="talk" variant="contained">
                  Contact Me
                </Button>
                <Button className="talk" variant="contained">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects showcase */}

      <div className="projects">
        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          Portfolio
        </h2>
        <div className="projects_show">
          <div className="show1">
            <div className="pic1">
              <img
                className="project_pics"
                src="https://clickup.com/blog/wp-content/uploads/2022/09/Google-Keep-Example.png"
                alt=""
                style={{ width: "30rem" }}
              />
            </div>

            <div className="pic1_content">
              <h3>Google-Keep Clone With Latest Web-Tech</h3>
              <p>
                Introducing our innovative React-powered application – a dynamic
                and feature-rich clone of Google Keep. Seamlessly combining
                cutting-edge technology with intuitive design, our app brings
                the power of organization and productivity to your fingertips.
                Designed to mimic the beloved features of Google Keep, our
                application offers a sleek and user-friendly interface that
                makes note-taking and task management a breeze. With the
                versatility of React, we've crafted an experience that ensures
                fluid responsiveness and an immersive user journey across all
                devices.
              </p>
            </div>
          </div>

          {/* show 2 */}

          <div className="show1">
            <div className="pic1_content">
              <h3>Netflix Clone With Latest Web-Tech</h3>
              <p>
                Welcome to our cutting-edge Netflix Clone – a React-powered
                entertainment hub that seamlessly combines the magic of movies,
                the allure of TV shows, and the convenience of modern
                technology. Built with React, Redux, Stripe, and CSS, our
                website brings the world of streaming to your fingertips.
                Experience the thrill of binge-watching your favorite content
                with our intuitive interface and dynamic user experience.
                Immerse yourself in a vast library of movies and TV series,
                meticulously organized for easy exploration. With React's
                capabilities, we've ensured smooth navigation and seamless
                playback for an unparalleled entertainment journey. But it
                doesn't stop there. Our integration of Stripe ensures a secure
                and hassle-free subscription process, unlocking premium features
                and an ad-free experience. Explore the power of Redux as your
                watch history, preferences, and progress seamlessly sync across
                devices, making your viewing experience truly personalized.
              </p>
            </div>

            <div className="pic1">
              <img
                className="project_pics"
                src="https://user-images.githubusercontent.com/61585443/185205338-c20bb089-618f-49e2-b740-1c02838030a4.png"
                alt=""
                style={{ width: "30rem" }}
              />
            </div>
          </div>

          {/* show 3 */}

          <div className="show1">
            <div className="pic1">
              <img
                className="project_pics"
                src="https://themeforest.img.customer.envatousercontent.com/files/447285452/fc/01_fc.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=eec4a7f98ff807b896be37f06a48c02d"
                alt=""
                style={{ width: "30rem" }}
              />
            </div>

            <div className="pic1_content">
              <h3>Footsall For All The Football Fans Out There </h3>
              <p>
                Welcome to Footsall Football – your ultimate destination for
                everything football, brought to life with React and SCSS.
                Immerse yourself in the world of soccer like never before, as we
                deliver the latest news, exhilarating match highlights,
                real-time standings, and live action all in one place. Our
                dynamic website showcases a seamless blend of design and
                functionality, ensuring an immersive experience for every
                football enthusiast. Dive into a treasure trove of captivating
                videos, relive thrilling match moments, and stay updated with
                the pulse of the sport through our comprehensive news coverage.
                Stay on the edge of your seat with live match streaming,
                enabling you to witness the excitement unfold in real-time.
                Explore interactive standings that keep you informed about your
                favorite teams' positions and progress throughout the season.
              </p>
            </div>
          </div>

          {/* show 4 */}

          <div className="show1">
            <div className="pic1_content">
              <h3>Experia a traveller Website </h3>
              <p>
                Welcome to Experia Travelling – where your wanderlust meets
                cutting-edge technology. Powered by React, our website brings
                the world of travel right to your screen, offering a seamless
                and captivating browsing experience. Discover breathtaking
                destinations and immersive travel experiences through our
                visually stunning and user-friendly interface. With React's
                dynamic capabilities, we've curated a platform that allows you
                to explore each location as if you were there in person. Plan
                your dream getaway with ease as you navigate through our
                interactive maps, captivating imagery, and detailed guides.
                Whether you're an avid traveler or a curious explorer, Experia
                Travelling is your digital companion, igniting your passion for
                adventure.
              </p>
            </div>

            <div className="pic1">
              <img
                className="project_pics"
                src="https://assets.awwwards.com/awards/submissions/2018/08/5b7e5eaa8034e.jpg"
                alt=""
                style={{ width: "30rem" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* self refernce */}

      <div className="refer">
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          <h2>Intrested working with me? Hit Me Up</h2>
        </div>

        <div className="contact">
          <Button className="talk" variant="contained">
            Contact Now
          </Button>
        </div>
      </div>

      {/* Testimonial */}

      {/* <div className="Testimonial">
            
          

          </div> */}

      {/* Conatct Form */}

      <div className="contact_form">
        <div className="user">
          <img
            className="user_pic"
            src="https://lh3.googleusercontent.com/pw/AIL4fc8DSHZcTuVbluLwZjCe9AMEBd8aVwLPeFxvV4_1YY2NLfcEh-gPxhnGVf4Y-1skr1KeaAFdSdVVO7ZCsDmzHTTR6uZlfa3kk12BtKZfLGjRHDqVgn6M93YuGlLQuZmFZEcJEkQBjCBVYxusV2jZ0EX4_7KMex2Sj5NKTDDAo-Vx_1BFfzaYc5NzSlKTjFEc1wo9HYGwzMi4Bdt-cU22qcWbiKLEHQFLIL8gj6liAP42GTTeOXrnAtTc33PEzuGLh_y8mzk_VbdqSuaAlqkF-8S3aLyBXI9Uu-mX8p5NYn2MhvPzp1Q7R0oeU3JrSFwCyhZX0YQ5tCYgbh4IaSSXHSHg_mcwFH_jsCX9dGjL_1jweDBauESgg92vNUytSByDJqu_K0EXNZyBJkfQnFu1-TUSCciYAIrQKxOB4dg8SjsmmVqf1uaE6zj6VG9nSjuxJY6mjDTKL2CjYteTnv3NPafS90WlNc6mVVmc2LPLncazhGXJ9FY5B8MMBo-Qgz5ljoYYw3HMiZh4SSxSYa4PGBwSK-T-HK0GkxaMpKHBK9KjJL1U7X0Qq8fnrQaDZ6Ig50U8ZROg1mDWUTc0GMv_833DFiYTZck-1xJyyDaCQBggiym-zqiURg70mGh9V8shmfRykwAmAHSuWjdxWT8peTjsMGOsZObipHd6cim-mRGFlZ_4yA5oNuGuYQFNobtolNbCIsGehKsCvVyX5p00rjp-n7KeHfyrFspPm7wchrRfc-1YdO-h3wLCy1FdkFeYRScWmjuH8zJawi7jOpBo6PAv_cFYyqYqJLld4QJNd1cAT18he9jbM88fB2ZC7yZNqqv_rX6hTXqcvt4jaL8K384Phqf-jzTe2xfuNEAORm0_rlGoPbMwCPoVRFuF4G_wjJo3jfJUJ9rZNG5ogXmj2DE=w1280-h719-s-no?authuser=0"
            alt="Avatar"
            style={{
              width: "320px",
              height: "320px",
            }}
          />
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>

      {/* Footer */}

      <div className="footer">
        <div className="personal">
          <h3>Contact Me</h3>
          <h4>
            Don't Be Shy. Hit My Socials!{" "}
            <WavingHandIcon sx={{ color: "blueviolet" }} />
          </h4>
        </div>
        <div className="socials">
          <a href="https://github.com/abhinabsarkar07">
            <img
              className="social_png"
              src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
              alt="Git-Hub"
            />
          </a>
          <a href="mailto:abhinabsarkar07@gmail.com">
            <img
              className="social_png"
              src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
              alt="Gmail"
            />
          </a>
          <a href="https://www.linkedin.com/in/abhinab-sarkar-15943b188/">
            <img
              className="social_png"
              src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png"
              alt="Linkedin"
            />
          </a>
          <a href="https://www.facebook.com/abhinabraj07/">
            <img
              className="social_png"
              src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.instagram.com/_knuckle__head/">
            <img
              className="social_png"
              src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580635-yumminkysocialmedia26_83102.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;