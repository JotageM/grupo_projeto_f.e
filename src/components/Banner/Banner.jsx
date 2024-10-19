import {CorpoBanner,BannerContainer} from "./Style";

const Banner = ( props ) => (
    <CorpoBanner>
        <BannerContainer>
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
        
        </BannerContainer>
    </CorpoBanner>
   
);

export default Banner