import styled from 'styled-components';

const Footer = styled.footer`
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 80px;
  display: flex;
  flex-flow: row wrap;
  padding: 50px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.9);


.icone {
  font-size: 25px !important;
}

.footer{
  margin: 0 auto;
  max-width: 1350px;
  width: 100%;
}

.footer > * {
  flex: 1 100%;
}

.footer-left {
  margin-right: 1.25em;
  margin-bottom: 2em;
}

.footer-left img {
  width: 10%;
}

.logo {
  display: flex;
}

.footer-left p {
  font-size: 1.2em !important;
  margin-top: 20px;
}

.footer-left span {
  font-family: 'Fredoka One', cursive;
  font-weight: 500;
  font-size: 4.5em;
  letter-spacing: 5px;
  margin-top: 20px;
  padding: 5px;
  padding-left: 15px;

}

h2 {
  font-weight: 600;
  font-size: 17px;
}

.logoImg {
  width: 140px !important;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer ul li a:hover {
  color: #e7f2e4;
}

.footer a {
  text-decoration: none;
}

.footer-right {
  display: flex;
  flex-flow: row wrap;
}

.footer-right > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.box a {
  color: #999;
}

.footer-bottom {
  text-align: center;
  color: #999;
  padding-top: 50px;
}

.footer-left p {
  padding-right: 20%;
  margin-bottom: 1em;
  color: #999;
}

.membro {
  color: white;
}

.socials a {
  background-color: #ee6c4d;
  width: 45px;
  height: 45px;
  display: inline-block;
  margin-top: 10px;
}

.socials a i {
  color: #e7f2e4;
  padding: 10px 12px;
  font-size: 10px;
}

.membro {
  color: white;
}

@media screen and (min-width: 600px) {
  .footer-right > * {
    flex: 1;
  }
  .footer-left {
    flex: 1 0px;
  }
  .footer-right {
    flex: 1 0px;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 15px;
  }
  .footer-left span{
    font-size: 2em;
  }
}
`;
export default Footer;