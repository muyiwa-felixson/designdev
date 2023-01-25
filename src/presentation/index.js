import styled from "styled-components";
import Text from "../components/type";
import {getTheme, getCore, getSystem} from "../utility/token";

const BannerWrapper = styled.div`
    background: ${props=> getTheme(props.theme.mode, 'surface-variant')};
    border-radius: ${getSystem('border-radius.medium')};
    padding: ${getCore('dimension.32')};
    display: grid;
    grid-template-rows:1fr;
    grid-gap: ${getCore('dimension.32')};
    margin-bottom: ${getCore('dimension.32')};
    & img{
        width: ${getCore('dimension.64')};
    }
    & div{
        display: flex;
        align-items: center;
    }
`

export const Banner = props => {
    return<BannerWrapper>
        <div><Text type="body.large"><img  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/hvbajl03mwaln0fgelhz" />Securrency Design System</Text></div>
        <Text size="title.medium">{props.title}</Text>
    </BannerWrapper>
}