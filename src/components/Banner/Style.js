import styled from "styled-components";

const CorpoBanner = styled.div`
  background-color: #002555;
  height: 17em;
  display: flex;
`;

const BannerContainer = styled.div`
  margin-left: 10em;
  margin-top: 3em;
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 3.5em;
    font-weight: 300;
    color: #FFFFFF;
  };
  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    margin-top: 2em;
  }
`;

export { CorpoBanner, BannerContainer };
