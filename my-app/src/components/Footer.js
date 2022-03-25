import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer className="footer">
    <div className="footer-middle">
      <div className="container">
        <br/>
        <div className="row">
        <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Newark, New Jersey</li>
              <li>27 Lantern St</li>
              <li>Phone: 899 998 8888</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>NEWS</h4>
            <ul className="list-unstyled">
              <li><a href ="trending"  class="link-secondary">Trending</a></li>
              <li><a href ="#" class="link-secondary">Other</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>EDUCATION</h4>
            <ul className="list-unstyled">
              <li><a href ="#" class="link-secondary">Top Schools</a></li>
              <li><a href ="#" class="link-secondary">Other</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} USNews App CS673 Team 8: Hollins,
              Vijay, Shrusti, Miti, Erica
            </p>
          </div>
        </div>
      </div>
      <br/>
    </div>

    {/* <p>
    <img
            alt=""
            src="https://auth.usnews.com/2q17ud509vvjvs5svj5ql4tt1q/20210316192702/assets/images/image.jpg"
            width="150"
            height="50"
            className="d-inline-block align-top"
          /> 2021 Copyright  &#169; USNews App CS673 Team 8: Hollins, Vijay, Shrusti, Miti, Erica</p>
    <br/> */}
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
  background: var(--mainDark);
}`;
