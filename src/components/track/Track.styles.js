import styled, {keyframes} from 'styled-components'  


const discAnim = keyframes`
    from {
        left: 75px;
    }
    to {
        left: 90px;
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

export const CardHead = styled.div`
    cursor: pointer;
    &:hover div:nth-child(1){
        animation: ${discAnim} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    position:relative;
`;

export const TrackCover = styled.div`
    position:relative;
    max-width: 200px;
    margin: 0 auto;
`;

export const DiscDiv = styled.div`
    position: absolute;
    z-index: 1;
    left: 75px;
    top: 15px;

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