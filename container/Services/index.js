import Card from '../../component/Card';
import Web from '../../public/icon/desktop-outline.svg';

const Services = () => (
  <>
    <section id="Services">
      <div className="srvContainer">
        <div className="srvCol">
          <div className="secDesc">
            <h1>Services</h1>
            <div className="p2">
              <h2>What I Love To Do</h2>
            </div>
          </div>
          <div className="cardRow">
            <div className="srvCard">
              <div className="featureBox">
                <Web />
                <div className="featureContent">
                  <h5>Web Development</h5>
                  <p>
                    Use React & Vue.JS popular javascript libraries for develop web applications.
                    For SSR(Server side rendering) I mostly use Next.js. My main focus during web
                    development is performance, accessibility, and bundle size.
                  </p>
                </div>
              </div>
            </div>
            <Card variant="srvCard">
              <div className="featureBox">
                <Web />
                <div className="featureContent">
                  <h5>Web Development</h5>
                  <p>
                    Use React & Vue.JS popular javascript libraries for develop web applications.
                    For SSR(Server side rendering) I mostly use Next.js. My main focus during web
                    development is performance, accessibility, and bundle size.
                  </p>
                </div>
              </div>
            </Card>
            <Card variant="srvCard">
              <div className="featureBox">
                <Web />
                <div className="featureContent">
                  <h5>Web Development</h5>
                  <p>
                    Use React & Vue.JS popular javascript libraries for develop web applications.
                    For SSR(Server side rendering) I mostly use Next.js. My main focus during web
                    development is performance, accessibility, and bundle size.
                  </p>
                </div>
              </div>
            </Card>
            <Card variant="srvCard">
              <div className="featureBox">
                <Web />
                <div className="featureContent">
                  <h5>Web Development</h5>
                  <p>
                    Use React & Vue.JS popular javascript libraries for develop web applications.
                    For SSR(Server side rendering) I mostly use Next.js. My main focus during web
                    development is performance, accessibility, and bundle size.
                  </p>
                </div>
              </div>
            </Card>
            <Card variant="srvCard">
              <div className="featureBox">
                <Web />
                <div className="featureContent">
                  <h5>Web Development</h5>
                  <p>
                    Use React & Vue.JS popular javascript libraries for develop web applications.
                    For SSR(Server side rendering) I mostly use Next.js. My main focus during web
                    development is performance, accessibility, and bundle size.
                  </p>
                </div>
              </div>
            </Card>
            <Card variant="srvCard">
              <div className="featureBox">
                <Web />
                <div className="featureContent">
                  <h5>Web Development</h5>
                  <p>
                    Use React & Vue.JS popular javascript libraries for develop web applications.
                    For SSR(Server side rendering) I mostly use Next.js. My main focus during web
                    development is performance, accessibility, and bundle size.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <div className="separated" />
  </>
);
export default Services;
