import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Lato', sans-serif;
}
a{
    text-decoration: none;
    color: #000;
    display: inline-block;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,a{
    font-family: 'Lato', sans-serif;
}
button{
    border: none;
    background: transparent;
}
:no-button:focus{
   border: none
}
input:focus{
    border: 1px solid rgba(212, 63, 141, 0.1);
   outline: none;

}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide{
    background: transparent
}
.error {
    border: 1px solid #dc3545;
}
.notload {
    cursor: pointer;
}
.notiLogin{
    margin-left: 4px;
    font-weight: 800;
}
`;
