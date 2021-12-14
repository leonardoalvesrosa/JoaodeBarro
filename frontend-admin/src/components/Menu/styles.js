import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.nav`
  text-decoration: none;
  list-style: none;
  font-family: 'Nunito Sans', sans-serif;
  background-color: rgba(0, 0, 0, 0.9);
  background-attachment: fixed;

  height: 80px;
  width: 100% !important;

  nav {
    margin: 0 auto;
    max-width: 1350px;
    width: 100%;
  }

  nav ul img {
    position: relative;
    top: 10px;
    width: 30px;
  }

  .menu {
    margin-right: 30px;
    /* margin-right: 180px; */
  }

  .logon {
    display: inline;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    border-radius: 3px;
    cursor: pointer;
    background-color: #ee6c4d;
    color: #EEE;
    padding: 12px 0.8em;
    margin-left: 20px;
    border: none;
    transition: 0.2s;

    :hover {
      background-color: #f9481c;
    }
  }

  h3{
    color: white;
  }

.joaoBarro {
  position: relative;
  margin-left: 5.2em;
  top: 0.6em;
}
.logoImg {
  margin-left: 5em;
  margin-top: 0.7em;
  width: 60px !important;
  height: 50px !important;
}
nav ul{
  float: right;
  margin-right: 6em;
}
nav ul li{
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a, .menu a{
  text-decoration: none;
  color: beige;
  font-size: 1.2em;
  padding: 7px 13px;
}

.menu li a:hover {
  background: rgb(54, 54, 54);
  transition: .3s;
}


.checkbtn{
  font-size: 30px;
  color: #EEE;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
@media (max-width: 952px){
  .joaoBarro {
    margin-left: 2.5em;
  }
  label.logo{
    font-size: 1.2em;
    padding-left: 0.5em;
  }
  nav ul li a{
    font-size: 1em;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #343a40;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  nav ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a{
    font-size: 20px;
  }
  a:hover,a.active{
    background: none;
    color: #ffd166;
  }
  #check:checked ~ ul{
    left: 0;
  }
}
`;

export const Logo = styled(Link)`
  position: relative;
  font-family: 'Fredoka One', cursive;
  text-decoration: none;
  list-style: none;
  color: beige;
  font-size: 2.3em;
  line-height: 80px;
  letter-spacing: 4px;
  padding: 0px 80px;
  padding-left: 0.5em;
  cursor: pointer;
  top: -0.2em !important;
  :hover {
    background-color: rgba(0, 0, 0, 0.01) !important;
  }

  @media(max-width:700px) {
    font-size: 1.8em;
  }
`;