import styled, {ThemeProvider} from "styled-components"
import { useState } from "react"
import { getTheme, getCore, getSystem, getSystemObject} from "../utility/token";
import { Switch } from "../components/switch";
import Text from "../components/type";

const LayoutWrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: ${props=>  getTheme(props.theme.mode, 'surface')};
    position:relative;

    & .layoutbar{
        height: 48px;
        border-bottom: 1px solid ${props=> getTheme(props.theme.mode, 'outline')};
        box-shadow: 0 1px 10px rgba(0,0,0,0.05);
        display:grid;
        grid-template-columns:auto max-content;
        padding: 0 24px;
        align-items: center;
    }
    & .viewer{
        padding: 24px;
    }
`;


const Layout = props => {
    const {children} = props
    const [dynamicToken, setDynamicToken] = useState('light');

    // console.log('Core test',getCore('palette.primary.20'));
    // console.log('System test',getSystem('font-weight.display'));
    // console.log('System object test',getSystemObject('typography.display.large.value'));
    // console.log(short(dynamicToken, 'sys.surface.value').value)
    return <ThemeProvider theme={{mode: dynamicToken}}>
        <LayoutWrapper>
            <div className="layoutbar">
                <Text>Component Preview</Text>
                <Switch onClick={()=> setDynamicToken(dynamicToken === 'light' ? 'dark':'light')} />
            </div>
        <div className="viewer">{children}</div>
        </LayoutWrapper>
    </ThemeProvider>
}

export default Layout