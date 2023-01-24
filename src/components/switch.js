import styled from "styled-components";
import { sys, getValue, short, getSysValue } from "../utility/token";

const Wrapper = styled.div`
    display: inline-block;
`;

const SwitchInput = styled.input.attrs((props) => ({
    type: "checkbox",
    className: "ds-checkbox",
  }))`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-items: center;
    box-sizing: content-box;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    position: relative;
    padding: 4px;
    transition: 0.2s;
    border-radius: 16px;
    background: ${props=> short(props.theme.mode, 'sys.surface-variant.value').value};
    /* width: ${getValue(getSysValue('sys.dimension.button-height.medium.value'))}; */
    width: 48px;
    height: 24px;
    box-sizing: border-box;
  
    &:after{
      background: #fff; 
      border-radius: 50%;
      content: "";
      height: 16px;
      width: 16px;
    }
  
    &:checked {
      cursor: pointer;
      background: ${props=> short(props.theme.mode, 'sys.primary.value').value};
      padding-left: 28px;
    }
  `;

export const Switch = (props) => {
    return (
      <Wrapper {...props}>
        <SwitchInput {...props} />
      </Wrapper>
    );
  };