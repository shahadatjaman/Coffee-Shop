import styled from "styled-components";

export const SliderWrapper = styled.div`
 background: url(${(props) => props.bg});
 background-size: cover;
 height: ${(props) => props.h}px;
 background-position: center;
 @media (max-width: 991px) {
    height: ${(props) => props.mh}px !important;
 }
`

export const SliderWrap = styled.div`

`