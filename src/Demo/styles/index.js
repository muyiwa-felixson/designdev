import styled, {css} from 'styled-components'
import Text from '../../components/type';
import { getSystemObject, getTheme, getCore, getSystem }from '../../utility/token';

export const MobileWrapper = styled.div`
    position: relative;
    color: ${props=>  getTheme(props.theme.mode,'on-surface')};
`;

export const Header = styled.div`
    height: 280px;
    background: ${props=>  getTheme(props.theme.mode,'primary')};
    position: relative;
    z-index:1;
    margin-bottom: -${getCore('{dimension.64}')};

    & .wrapper{
        height: 280px;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4));
        padding: ${getCore('{dimension.56}')} ${getCore('{dimension.16}')};
        
        color: ${props=> getTheme(props.theme.mode, 'on-primary')};

        & svg{
            fill: ${props=> getTheme(props.theme.mode, 'on-primary')};
            margin: 0 auto;
            display: block;
            width: 100px;
            margin-bottom: ${getCore('{dimension.32}')};
        }
    }
`

export const WelcomeMessage = styled.div`
    display: grid;
    grid-gap: ${getCore('{dimension.16}')};
    grid-template-columns: ${getCore('{dimension.48}')} auto;
    align-items: center;
    color: ${props=> getTheme(props.theme.mode, 'on-primary')};

    &>div{
        display: grid;
        grid-template-columns: 1fr;
    }
    & img{
        border-radius: 50%;
        width: 100%;
        image-resolution: cover;
        border: 1px solid ${props=> getTheme(props.theme.mode, 'outline')};
    }
    & .sub{
        opacity: 0.8;
    }
`;

export const Balance = styled.div`
    height: 96px;
    background: ${props=> getTheme(props.theme.mode, 'surface')};
    border-radius: ${getSystem('border-radius.medium')};
    position: relative;
    z-index:2;
    margin: ${getCore('{dimension.16}')};
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    box-shadow: ${props=> `${props.shadow.x}px ${props.shadow.y}px ${props.shadow.blur}px ${props.shadow.color}`};
    
    & div{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap:  ${getCore('{dimension.4}')};
        & span{
            display: block;
            text-align: center;
        }
        &:first-child{
            border-right: 1px solid ${props=> getTheme(props.theme.mode, 'outline')};
        }
    }
`

export const BodyMain = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: ${getCore('{dimension.48}')} ${getCore('{dimension.16}')};
    grid-gap: ${getCore('{dimension.48}')};
    justify-content: center;
    align-items: center;
    text-align: center;

    & .rc-slider{
        width: 320px;
        margin:0  auto;
        & .rc-slider-handle{
            height: 40px;
            width: 40px;
            margin-top: -14px;
            background: ${props=> getTheme(props.theme.mode, 'success')};
            opacity: 1;
            border: none;
            box-shadow: ${props=> `${props.shadow.x}px ${props.shadow.y}px ${props.shadow.blur}px ${props.shadow.color}`};
        }
        & .rc-slider-rail{
            background: ${props=> getTheme(props.theme.mode, 'surface-variant')};
            height: 12px;
        }
        & .rc-slider-track{
            background: ${props=> getTheme(props.theme.mode, 'success')};
            height: 12px;
        }
    }
`

export const BottomNav = styled.div`
    position: fixed;
    width: 100%;
    bottom: 48px;
    height: 82px;
    display: grid;
    z-index: 5;
    background: ${props=> getTheme(props.theme.mode, 'surface')};
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
export const MenuButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${props=> getTheme(props.theme.mode, 'on-surface-variant')};
    & svg{
        fill: ${props=> getTheme(props.theme.mode, 'on-surface-variant')};
        height:  ${getCore('{dimension.32}')};
        display: block;
    }
    &.active{
        color: ${props=> getTheme(props.theme.mode, 'primary')};
        & svg{
            fill: ${props=> getTheme(props.theme.mode, 'primary')};
        } 
    }
    &:hover{
        color: ${props=> getTheme(props.theme.mode, 'primary')};
        & svg{
            fill: ${props=> getTheme(props.theme.mode, 'primary')};
        } 
    }
`;

export const Menu = props => {
    return <MenuButton>
        {props.icon}
        <Text type="label.medium">{props.label}</Text>
    </MenuButton>
}