import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Collection from "./Collection";
import FadeInSection from "./FadeInSection";
import Link from "./Link";
import Award from "./Award";

import languages, {libraries} from "../progress-data";
import socials, {icons} from "../social-media";
import projects, {images} from "../projects";
import hackerranks, {udemys} from "../awards";

function App() {

  const [link, setLink] = useState("https://replit.com/@ledd-23/Raft?lite=true"); /*project link hook*/
  const [embed, setEmbed] = useState("");

  return (
    <div>
        <Header /> {/*navbar header*/}

        <section id="title" className="title-section">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-6">
                <FadeInSection>
                  <h5>my name is danh le,</h5>
                  <h2>im a &lt;computer science/&gt; major.</h2>
                  <p>nice to meet you</p> {/*introduction*/}

                  <div>
                    {Object.keys(socials).map((social, index) => {
                      return (
                          <Link icon={icons[social]} key={index} name={social} link={socials[social]}/>
                      )
                    })}
                  </div> {/*social media*/}
                </FadeInSection>

              </div> {/*introduction and links*/}

              <div className="col-lg-6" style={{paddingLeft: "5rem"}}>
                <FadeInSection>
                  <a title="Yuzu illustration by Robin Yao" href="https://tudoujie.tumblr.com/post/173995119408/more-rooms-1st-3rd-are-yuzus-rooms">
                    <img alt="robin-yao" className="d-none d-lg-block corner robin-yao" src="https://64.media.tumblr.com/02909edb8f87a02cdabc64112cb4663a/tumblr_p8vodwGvb61uzdx4lo1_1280.png"></img>
                  </a>
                </FadeInSection>
              </div> {/*yuzu illustration by robin yao*/}

            </div>
          </div>
        </section> {/*title section*/}

        <section className="about-section corner">
          <div className="container-fluid">
            <div className="row mb-5" id="about">

              <div className="col-lg-6">
                <FadeInSection>
                  <a title="Dong Ho painting" href="https://en.wikipedia.org/wiki/%C4%90%C3%B4ng_H%E1%BB%93_painting">
                    <img alt="dong-ho" className="corner dong-ho" src="https://www.vietnam-culture.com/wp-content/uploads/2014/02/Dong-Ho-Painting.jpg"></img>
                  </a>
                </FadeInSection>
              </div> {/*dong ho painting*/}

              <div className="righty col-lg-6">
                <FadeInSection>
                    <h3>about me 🧍</h3>
                    <p>
                      i was born in vietnam.
                      i play the piano 🎹. my favorite composer is chopin. 
                      i also like playing video games 🎮 and reading books 📖.
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
                    {Collection(languages, "languages and tools ⌨️")}
                  </FadeInSection>
                </div> {/*programming languages*/}

                <div className="col-lg-6">
                  <FadeInSection>
                    {Collection(libraries, "frameworks 📚")}
                  </FadeInSection>
                </div> {/*frameworks*/}

            </div> {/*skills*/}

            <FadeInSection>
              <div id="certificates" className="row pt-2">
                {
                  Object.keys(hackerranks).map((award, index) => {
                    return <Award link={hackerranks[award]} color="white" icon="fa-award" key={index} issuer="hackerrank" name={award}/>
                  })
                } {/*hackerrank*/}

                {
                  Object.keys(udemys).map((award, index) => {
                    return <Award link={udemys[award]} color="purple" icon="fa-chevron-up" key={index} issuer="udemy" name={award}/>
                  })
                } {/*udemy*/}

                <a title="Computer Science" href="https://catalog.rhodes.edu/programs-study/mathematics-and-computer-science/requirements-major-computer-science" className="foldtr col-lg-1 col-sm-2 mx-3 my-3 rhodes">
                  <img alt="rhodes" height="50.9" className="py-3" src="https://www.rhodes.edu/themes/custom/rhodes/logo.svg"></img>
                  <p className="py-1">Comp. Sci.</p>
                  <p><strong>Major</strong></p>
                </a> {/*rhodes college*/}
              </div>
            </FadeInSection> {/*certificates*/}

            <div id="portfolio" className="row pt-4">
                <FadeInSection>
                  <h3 className="righty">experience 🧗‍♂️</h3>
                </FadeInSection>
                {/*<button style={{textAlign: "right"}} type="button" class="btn" onClick={
                    function(){
                        if (embed === ""){
                          setEmbed("&embed=true");
                        } else {
                          setEmbed("");
                        }
                    }
                }>Click me</button> {/*embed style toggler*/}
                <div className="col-lg-6">
                  <FadeInSection>
                    <div className="row">
                      {Object.keys(projects).map((project) => {
                          return (
                            <div className="col-4 py-3" style={{textAlign: "center"}}>
                              <div>
                                <button type="button" class="btn" onClick={
                                    function(){
                                      setLink(projects[project]);

                                    }
                                  }>
                                  <img title={project} alt={project} width="100" height="100" src={images[project]}></img>
                                </button> {/*individual toggler*/}
                              </div>
                            </div>
                          )
                      })}
                            <div className="col-4 py-3 text-center">
                              <div>
                                <a title="ConCat Academy" href="https://concatacademy.herokuapp.com/" type="button" class="btn">
                                  <img alt="concatacademy" height="90" src="https://i.imgur.com/qLbeogx.png"></img>
                                </a>
                              </div>
                            </div> {/*concat academy*/}

                            <div className="col-4 py-3" style={{textAlign: "center"}}>
                              <div>
                                <a title="Mystery" href="https://youtu.be/dQw4w9WgXcQ" type="button" class="btn">
                                  <img alt="mystery" width="90" height="90" src="https://cdn0.iconfinder.com/data/icons/video-games-ultra-color/60/001_-_Mystery_Box-512.png"></img>
                                </a>
                              </div>
                            </div> {/*rick roll'd*/}
                    </div>
                  </FadeInSection>
                </div> {/*project togglers*/}

                <div className="col-lg-6 corner">
                  <FadeInSection>
                    <iframe id="replit" title="replit display" className="corner" frameBorder="0" width="100%" height="500px" src={link + embed}>

                    </iframe>
                  </FadeInSection>
                </div> {/*replit project*/}

            </div> {/*experince*/}

            <div id="misc." className="row pt-5">
              <FadeInSection>
                <h3>misc. 🎵</h3>
              </FadeInSection>

              <div className="col-lg-6">
                <FadeInSection>
                  <div className="card mb-3 border-downer-radius border-upper-radius">
                    <iframe className="border-upper-radius" height="315" src="https://youtube.com/embed/9mqp1pzRPBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="card-body">
                      <h5 className="card-title">my favorite piece</h5>
                      <p className="card-text">chopin's andante spianato and grande polonaise brillante, op. 22 by dang thai son, first asian international chopin piano competition winner.</p>
                    </div>
                  </div>
                </FadeInSection>
              </div>

              <div className="col-lg-6">

              </div>
            </div>

          </div>
        </section> {/*convoluted section: need fixing*/}

        <Footer />
    </div>
  );
}

export default App;
