import React from "react";
import House from "../components/images/House.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="Left">
          <div className="text-center">
            <ul className="text-uppercase fw-bold ">
              <i className="fas"></i> We help to start building your dreams!
              <a
                className="btn btn-btn-light  "
                href="https://github.com/tkaramitros/chatbot/tree/main/front/src"
                role="button"
              >
                <i className="bi bi-github"></i>
              </a>
              <p className="copyright">© 2022 Copyright</p>
            </ul>
          </div>
          <div className="Right">
            <img
              src={House}
              class="card-img-right"
              style={{
                width: "80%",
                height: "500px",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
