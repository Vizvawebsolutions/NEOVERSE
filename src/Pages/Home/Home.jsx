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
          {/* Your page content goes here */}
          <h1>Hello Abhinab Sarkar Here </h1>
          <h1>
            I'm a <span>{text}</span>
            <span style={{ color: "red" }}>
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
        <div className="tech_doc">
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
                  <span style={{ textAlign: "center" }}>6 +</span>
                  <p style={{ textAlign: "center" }}>Projects</p>
                </div>
                <div className="strike">
                  <span style={{ textAlign: "center" }}>90 +</span>
                  <p style={{ textAlign: "center" }}>Happy Clients</p>
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
                src="https://images.idgesg.net/images/article/2021/09/google-keep-01-home-page-blank-100901215-large.jpg?auto=webp&quality=85,70"
                alt=""
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
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/234b7181-bf39-40ea-b1c6-509f8af90763/de9isxy-0cd43878-e283-4d1e-8a57-524645e45004.jpg/v1/fit/w_828,h_466,q_70,strp/celestia_moore_netflix_banner_by_vrpond_de9isxy-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE5IiwicGF0aCI6IlwvZlwvMjM0YjcxODEtYmYzOS00MGVhLWIxYzYtNTA5ZjhhZjkwNzYzXC9kZTlpc3h5LTBjZDQzODc4LWUyODMtNGQxZS04YTU3LTUyNDY0NWU0NTAwNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yUCv5vemm5EJHJO4KqX1yKfoCRQU3SwVX7jtQrqjI2M"
                alt=""
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
              />
            </div>
          </div>
        </div>
      </div>


      {/* self refernce */}


      <div className="refer">
        <div
          className="hit"
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          <h2>Intrested working with me? Hit Me Up</h2>
        </div>

        <div className="contact">
          <Button className="talk" variant="contained" href="#contact">
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
            src="https://lh3.googleusercontent.com/pw/AIL4fc_2d8ysLqYrlyzyzRoKD5z6wLOBFpsScrokyTM_RRJ3maJ1dF4v_lV-PXevhcSOHxr4_da34iiM6AWkRUVVgJec9e6WNNiq-yhiFVQ3Cz8y3_rJOBeKKIKatRXcpDctkLz_h20t6hGuvUub69Dgk8chZO3y3Mud0L6MW1u7PWkdsN3F2sRPftYftT10vK89-CtNEa-E8YUTg8gr12UD5-8naktD1b3QTgWKnFbtcerhvzCMF1WhtA1G2J2OW4aBX77c2z24a3P9Ou8_KYfX_lYcqwzav-TMBY4AVpBi4nHg464WasR8MQMo5rRtGp9YBYhkBPkXAXc003UPR7j1BHzdmY9eleVhJmRyK6Jt3KqPn-kld2BHfjaAoF9SbgvP-Tyb-tH9FuUCrbF-BrA1UXVBEfUe6kBTn6obE2N6oh0TPaUUCT0WinDVbKQa0KTkLUjnbr9LAaPk3VmyGXGauC8D8wlV4f1QbWRnNcZohqd3ehlNdmGJrGOI4y43rfGaPgUTc7sLHAStT5DYpccxCoumHSTPdUxN8TmsLjZEJ5wXwFV7Gl4em8lVfehSQeFGwl3Gkn9tJwmEOhqUqY04klC1UNPv4zZgoagKHoi4dk4gCwT5meDVzsWHCF3MVABuKhsnvyGXe5a5bx3M_oaWMu5zmGHGexUjcBkONZVG8Yt5WHMCif0I-J8mPUB1QojvoAf3psPS7DNC-S8HJgFSbqBQitf_ooAgJFZSqk2XxlG29qqw90KHCBmBhyp5eA5kSwjme1AhGWcPynMoAwSaqjXOxfWFGXmj2gmoSVIn8EM_9faesi7vGnPlLalPiYKFN5gLVFJaAJfQukl9xe6raxutzJrmWV19knuo-qaM5ydl6JCZNy3jnofmdgKtU2TcKFTI7sCAxReMKLO6aLXpuX0=w500-h500-s-no?authuser=0"
            alt="Avatar"
            style={{
              width: "450px",
              height: "450px",
            }}
          />
        </div>
        <div className="form" href="#contact">
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
