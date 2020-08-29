import styled, {keyframes} from 'styled-components'  


const midCardAnim = keyframes`
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(10px, -10px);
    }
`;

const backCardAnim = keyframes`
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(5px, -5px);
    }
`;

export const CardFront = styled.div`
    width: ${props => props.width || "150px"};
    height: ${props => props.height || "150px"};
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    filter: drop-shadow(3px 1px 4px #000000);
    z-index: 3;
    position: relative;
`;

export const CardMiddle = styled(CardFront)`
    z-index: 2;
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

export const CardBack = styled(CardFront)`
    z-index: 1;
    position: absolute;
    left: 20px;
    bottom: 20px;
`;  

export const CardHead = styled.div`
    cursor: pointer;
    &:hover div:nth-child(1){
        animation: ${midCardAnim} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    &:hover div:nth-child(2){
        animation: ${backCardAnim} 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    position:relative;
`;

export const AlbumCover = styled.div`
    position:relative;
    max-width: 200px;
    margin: 0 auto;
`;


export const Title = styled.span`
    font-family: "Barlow";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
    text-align: center;
    width: 100%;
    display: block;
`;

export const Author = styled.span`
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    width: 100%;
    display: block;
    color: #D9D9D9;
`;

export const Rating = styled.div`
    display: flex;

`;  

export const Upvote = styled.div`
    text-align: left;
    flex: 0.5;
    cursor: pointer;
`;

export const VoteNum = styled.span`
    color: "#FAAD14";
    
    padding-left: 5px;
    font-size: 14px;
    color: #FAAD14;
`;

export const Downvote = styled.div`
    text-align: right;
    flex: 0.5;
    cursor: pointer;
`;