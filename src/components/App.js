import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProgressBar from 'react-bootstrap/ProgressBar';
import progress, {libraries} from "../progress-data";
import Link from "./Link";
import socials, {icons} from "../social-media";


function App() {
  return (
    <div>
        <Header />

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
              </div>
              <div className="col-lg-6 ps-5 fadeDown">
                <a href="https://tudoujie.tumblr.com/post/173995119408/more-rooms-1st-3rd-are-yuzus-rooms">
                  <img className="round-image" src="https://64.media.tumblr.com/02909edb8f87a02cdabc64112cb4663a/tumblr_p8vodwGvb61uzdx4lo1_1280.png"></img>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section corner">
          <div className="container-fluid">
            <div className="row mb-5" id="about">
              <div className="col-lg-6">
                <a href="https://en.wikipedia.org/wiki/%C4%90%C3%B4ng_H%E1%BB%93_painting">
                  <img className="another-round-image" src="https://www.vietnam-culture.com/wp-content/uploads/2014/02/Dong-Ho-Painting.jpg"></img>
                </a>
              </div>
              
              <div className="righty col-lg-6 px-5">
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
                  i think they're very expressive.
                </p>
              </div>
            </div>
          
        
            <div id="skills" className="row">
              <h2>skills</h2>
              <div className="col-lg-6 corner pt-3">
                <h5 className="pb-3">programming languages</h5>
                {Object.keys(progress).map((skill, index) => {
                          return (
                            <div>
                              <ProgressBar key={index} now={progress[skill]} />
                              <p>{skill}</p>
                            </div>
                          )
                })}
              </div>
              <div className="col-lg-6">
                <div className="corner py-2">
                  <h5 className="ps-3 pb-3 pt-2">libraries</h5>
                  {Object.keys(libraries).map((skill, index) => {
                            return (
                              <div className="ps-3">
                                <ProgressBar key={index} now={libraries[skill]} />
                                <p>{skill}</p>
                              </div>
                            )
                  })}
                  </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </div>

  );
}

export default App;
