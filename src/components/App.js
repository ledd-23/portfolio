import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Collection from "./Collection";
import FadeInSection from "./FadeInSection";
import Link from "./Link";

import languages, {libraries} from "../progress-data";
import socials, {icons} from "../social-media";
import projects, {images} from "../projects";

function App() {

  const [link, setLink] = useState("https://replit.com/@ledd-23/Raft?lite=true&embed=true"); /*project link hook*/

  return (
    <div>
        <Header /> {/*navbar header*/}

        <section id="title" className="title-section">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-6">
                <FadeInSection>
                  <h5>my name is danh le,</h5>
                  <h2>im a &lt;computer science&gt; major <br/>at rhodes college</h2>
                  <p>nice to meet you</p>
                  
                  <div>
                    {Object.keys(socials).map((social, index) => {
                      return (
                          <Link icon={icons[social]} key={index} name={social} link={socials[social]}/>
                      )
                    })}
                  </div>
                </FadeInSection>

              </div> {/*introduction and links*/}

              <div className="col-lg-6 ps-5">
                <FadeInSection>
                  <a href="https://tudoujie.tumblr.com/post/173995119408/more-rooms-1st-3rd-are-yuzus-rooms">
                    <img alt="robin-yao" className="d-none d-lg-block corner robin-yao" src="https://64.media.tumblr.com/02909edb8f87a02cdabc64112cb4663a/tumblr_p8vodwGvb61uzdx4lo1_1280.png"></img>
                  </a>
                </FadeInSection>
              </div> {/*yuzu illustration by robin yao*/}

            </div>
          </div>
        </section>

        <section className="about-section corner">
          <div className="container-fluid">
            <div className="row mb-5" id="about"> 
              
              <div className="col-lg-6">
                <FadeInSection>
                  <a href="https://en.wikipedia.org/wiki/%C4%90%C3%B4ng_H%E1%BB%93_painting">
                    <img alt="dong-ho" className="corner dong-ho" src="https://www.vietnam-culture.com/wp-content/uploads/2014/02/Dong-Ho-Painting.jpg"></img>
                  </a>
                </FadeInSection> 
              </div> {/*dong ho painting*/}
              
              <div className="righty col-lg-6 px-5">
                <FadeInSection>
                    <h3>about me 🧍</h3>
                    <p>
                      i was born in hà nội, việt nam.
                      i play the piano 🎹. my favorite composer is chopin.
                      i often play video games 🎮 and occasionally basketball 🏀 too.
                    </p>
                    <p>
                      i fell in love with computer science in college.
                      my passion is distributed and parallel systems, but
                      im learning ui/ux desgin and drawing too. 
                      i think they are very expressive.
                    </p>
                  </FadeInSection>
              </div> {/*short about introduction*/}

            </div> 
          
            <div id="skills" className="row">
                <FadeInSection>
                  <h3>skills ⚙️</h3>
                </FadeInSection>

                <div className="col-lg-6">
                  <FadeInSection>
                    {Collection(languages, "programming languages ⌨️")}
                  </FadeInSection>
                </div> {/*programming lanugages*/}
              
                <div className="col-lg-6">
                  <FadeInSection>
                    {Collection(libraries, "libraries 📚")}
                  </FadeInSection>
                </div> {/*libraries*/}

            </div> {/*skills*/}

            <div id="portfolio" className="row pt-5">
                <FadeInSection>
                  <h3 className="righty">experience 🧗‍♂️</h3>
                </FadeInSection>
                
                <div className="col-lg-6">
                  <FadeInSection>
                    <div className="row">
                      {Object.keys(projects).map((project, index) => {
                          return (
                            <div className="col-4 py-3" style={{textAlign: "center"}}>
                              <div>
                                <button type="button" class="btn" onClick={
                                    function(){
                                      setLink(projects[project]);
                                    }
                                }>
                                  <img alt={project} width="100" height="100" src={images[project]}></img>
                                </button> {/*individual toggler*/}
                              </div>
                            </div>
                          )
                      })}
                    </div>
                  </FadeInSection>
                </div> {/*project togglers*/}
              
                <div className="col-lg-6">
                  <FadeInSection>
                    <iframe id="replit" title="replit display" className="corner" frameBorder="0" width="100%" height="500px" src={link}></iframe>
                  </FadeInSection>  
                </div> {/*replit project*/}
                
            </div> {/*experince*/}

            <div id="misc." className="row pt-5">
              <FadeInSection>
                <h3>misc. 🎶</h3>
              </FadeInSection>
          
              <div className="col-lg-6">
                <FadeInSection>
                  <div className="card mb-3 border-downer-radius border-upper-radius">
                    <iframe className="border-upper-radius" height="315" src="https://www.youtube.com/embed/nXGHIbpvnRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="card-body">
                      <h5 className="card-title">arabesque</h5>
                      <p className="card-text">please pardon the quality. this was recorded during the pandemic for my piano lesson.</p>
                    </div>
                  </div>
                </FadeInSection>
              </div>
              
              <div className="col-lg-6">
                {/*<FadeInSection>
                    <div className="card mb-3 border-downer-radius border-upper-radius">
                    <img height="315" src="https://imgflip.com/s/meme/This-Is-Where-Id-Put-My-Trophy-If-I-Had-One.jpg" className="card-img-top" alt="meme"></img>
                      <div className="card-body">
                        <h5 className="card-title">drawing</h5>
                        <p className="card-text">i would put a drawing of mine here.<br/> if i had one.</p>
                      </div>
                    </div>
                </FadeInSection> */}
              </div>
            </div>
                  
            <div>
                  🚧 will add more stuff 👷
            </div>
          </div>
        </section> {/*convuluted section: need fixing*/}

        <Footer /> 
    </div>
  );
}

export default App;
