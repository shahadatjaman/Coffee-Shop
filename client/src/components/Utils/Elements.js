import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  margin: ${(props) => (props.margin ? "55px auto" : "auto")};
  position: relative;
  flex-direction: ${(props) => (props.direction === "column" ? "column" : "")};
  @media (max-width: 1200px) {
    max-width: 960px;
    padding: 0px 28px;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.direction ? "row-reverse" : "")};
  width: 100%;
`;
export const Col = styled.div`
  max-width: ${(props) => props.w}%;
  position: relative;
  width: 100%;
  /* min-height: 1px; */
  padding-right: 15px;
  padding-left: 15px;
  margin: ${(props) => props.mlauto};
  display: ${(props) => (props.center ? "flex" : "")};
  @media (max-width: 991px) {
    max-width: ${(props) => props.md}%;
    display: ${(props) => (props.mdnone ? "none" : "")};
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.none ? "none" : "")};
    max-width: ${(props) => props.sm}% !important;
  }
  @media (max-width: 468px) {
    max-width: ${(props) => props.sm}% !important;
  }
`;

// Section Title
export const Title = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;
export const TitleH1 = styled.h1`
  margin-bottom: 1rem;
  color: ${(props) => props.color};
`;

export const TitleH6 = styled.h6`
  max-width: 650px;
  margin: 0 auto;
  color: #555;
  font-weight: 400;
  line-height: 1.625;
  color: ${(props) => props.color};
  @media (max-width: 668px) {
    max-width: 400px;
  }
`;

export const Button = styled.a`
  background: #0250c5;
  border-color: #0250c5;
  color: #fff;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
`;
