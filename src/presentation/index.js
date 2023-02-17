import styled from "styled-components";
import { Logo } from "../assets/images/logo";
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
    & svg{
        fill: ${props=> getTheme(props.theme.mode, 'on-surface')};
    }
    & div{
        display: flex;
        align-items: center;
    }
`

export const Banner = props => {
    return <BannerWrapper>
        <div><Logo /></div>
        <Text type="display.small">{props.title}</Text>
    </BannerWrapper>
}