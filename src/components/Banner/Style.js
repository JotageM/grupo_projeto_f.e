import styled from "styled-components";

const CorpoBanner = styled.div`
  display: flex;
  background-color: #002555;
  height: 17em;

  @media (max-width: 1080px) {
    align-items: center;
    justify-content: center;
    height: 12em;
  }

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

  @media (max-width: 1080px) {
    margin-left: 0;
    text-align: center;
    margin-top: 0;

    h3 {
      margin-top: 1em;
      padding-left: 3em;
      padding-right: 3em;
    }
  }
`;

export { CorpoBanner, BannerContainer };
