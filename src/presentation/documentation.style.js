import styled, { css } from "styled-components";
import { getTheme, getSystem, getCore, getValue } from "../utility/token";
import Text from "../components/type";

export const Grider = styled.div`
  display: grid;
  margin: ${getCore('dimension.12')} 0;
  grid-gap: ${getCore('dimension.8')};
  grid-template-columns: minmax(40px, 60px) auto;
  /* align-items: center; */
`;

export const Liner = styled.div`
  display: grid;
  margin: ${getCore('dimension.12')} 0;
  grid-gap: ${getCore('dimension.8')};
  grid-template-columns: minmax(40px, 60px) auto;
  align-items: center;
`;
export const ColorDot = styled.div`
  display: inline-grid;
  margin: 0 ${getCore('dimension.8')};
  grid-gap: ${getCore('dimension.8')};

  & .box {
    height: ${getCore('dimension.32')};
    width: ${getCore('dimension.48')};
    background: ${(props) => props.value.includes("{") ? getValue(props.value) : props.value};
    border-radius: ${getSystem('border-radius.small')};
    border: 1px solid ${(props) => getTheme(props.theme.mode, "outline")};
  }
`;

export const ColorBox = (props) => {
  return (
    <ColorDot {...props}>
      <div className="box" />
      <Text type="body.medium">{props.title}</Text>
      <Text type="body.small">{props.value.includes("{") ? getValue(props.value) : props.value}</Text>
    </ColorDot>
  );
};

export const FontLine = styled.div`
  display: inline-grid;
  margin: ${getCore('dimension.2')};
  padding: ${getCore('dimension.2')} ${getCore('dimension.8')};
  border-radius: ${getSystem('border-radius.small')};
  background: ${(props) => getTheme(props.theme.mode, "neutral-container")};
  color: ${(props) => getTheme(props.theme.mode, "on-neutral-container")};
  ${props=> props.group === 'size' && css`
    background: ${(props) => getTheme(props.theme.mode, "success-container")};
    color: ${(props) => getTheme(props.theme.mode, "on-success-container")};
  `}
  grid-gap: ${getCore('dimension.8')};
`;

export const FontBox = (props) => {
    console.log(props);
  return (
    <FontLine {...props} group="style">
      <Text type="body.medium">{props.value.includes("{") ? getValue(props.value) : props.value}</Text>
    </FontLine>
  );
};

export const FontSize = props=> {
    return <FontLine {...props} group="size">
        <Text type="body.medium">{props.value.includes("{") ? getValue(props.value) : props.value}</Text>
        </FontLine>
    };

    export const Elevation = styled.div`
  display: inline-grid;
  /* margin: 8px; */
  grid-gap: ${getCore('dimension.8')};
& .box{
    height: ${getCore('dimension.48')};
    width: ${getCore('dimension.64')};
    background: ${(props) => getTheme(props.theme.mode, "neutral")};
    border-radius: ${getSystem('border-radius.small')};
    box-shadow: ${props=> `${props.value.x}px ${props.value.y}px ${props.value.blur}px ${props.value.color}`}
}
`;

export const ElevationBox = (props) => {
  return (
    <Elevation {...props}>
      <div className="box" />
      {/* <Text type="body.medium">{props.title}</Text> */}
    </Elevation>
  );
};

export const PageGrid = styled.div`
    display: grid;
    grid-template-columns: 180px auto;
    grid-gap: ${getCore('dimension.64')};
    align-items: flex-start;

    & .sidemenu{
    background: ${props=> getTheme(props.theme.mode, 'surface-variant')};
    border-radius: ${getSystem('border-radius.medium')};
    padding: ${getCore('dimension.16')};
    display: grid;
    grid-template-columns: 1fr;
    & div{
        cursor: pointer;
        padding: ${getCore('dimension.8')};
        border-radius: ${getSystem('border-radius.small')};     
        &.active{
            background: ${(props) => getTheme(props.theme.mode, "neutral-container")};        
        }
    }
    & span{
        text-transform: capitalize;
    }
    }

    & .inview{
        display: none;
        &.active{
            display: block;
        }
        & .section_title{
            text-transform: capitalize;
            padding:  ${getCore('dimension.16')} 0;
        }
    }

`