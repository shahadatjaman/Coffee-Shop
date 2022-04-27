import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Poppins', sans-serif;
}
a{
    text-decoration: none;
    color: #000;
    display: inline-block;
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
`;
