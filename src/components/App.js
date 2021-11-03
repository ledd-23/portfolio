import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Collection from "./Collection";
import FadeInSection from "./FadeInSection";
import Link from "./Link";

import languages, {libraries} from "../progress-data";
import socials, {icons} from "../social-media";

function App() {
  return (
    <div>
        <Header /> {/*navbar header*/}

        <section id="title" className="title-section">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-6 fadeLeft">
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
              </div> {/*introduction and links*/}

              <div className="col-lg-6 ps-5 fadeDown">
                <a href="https://tudoujie.tumblr.com/post/173995119408/more-rooms-1st-3rd-are-yuzus-rooms">
                  <img alt="robin-yao" className="d-none d-lg-block corner robin-yao" src="https://64.media.tumblr.com/02909edb8f87a02cdabc64112cb4663a/tumblr_p8vodwGvb61uzdx4lo1_1280.png"></img>
                </a>
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
                    <h2>about me</h2>
                    <p>
                      i was born in hà nội, việt nam.
                      i play the piano. my favorite composer is chopin.
                      i often play video games and occasionally basketball too.
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
                  <h2>skills</h2>
                </FadeInSection>

                <div className="col-lg-6">
                  <FadeInSection>
                    {Collection(languages, "programming languages")}
                  </FadeInSection>
                </div> {/*programming lanugages*/}
              
                <div className="col-lg-6">
                  <FadeInSection>
                    {Collection(libraries, "libraries")}
                  </FadeInSection>
                </div> {/*libraries*/}

            </div> {/*skills*/}
            
          </div>
        </section> {/*about section*/}

        <Footer /> 
    </div>
  );
}

export default App;
