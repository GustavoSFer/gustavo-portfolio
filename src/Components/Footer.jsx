import  React, { Component } from 'react';
import '../Style/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row bg-dark p-3 pt-5 width-pg fontFamily text-center">
          <div className="col-sm-6 text-color pt-4 mb-5">
            <p>© Copyright 2021. All Rights Reserved.</p>
          </div>
          <div className="col-sm-6 text-color pt-4 mb-5 border-start border-primary">
            <p className="border border-primary d-inline p-3">Entrar em contato</p>
            <div className="mt-4 d-flex justify-content-center">
              <a
                  href="https://github.com/GustavoSFer"
                  target="_blank"
                  rel="noreferrer"
              >
                <div className="container-contato m-3 img-1">
                </div>
                </a>
              <a
                href="https://www.linkedin.com/in/gustavo-dos-santos-fernandes/"
                target="_blank"
                rel="noreferrer"
              >
              <div className="container-contato m-3 img-2">
              </div>
              </a>
              <a
                href="https://www.facebook.com/gustavo.fernandes.7127"
                target="_blank"
                rel="noreferrer"
              >
                <div className="container-contato m-3 img-3">
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;