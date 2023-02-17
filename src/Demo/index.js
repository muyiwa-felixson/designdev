import { useState } from "react";
import Slider from "rc-slider";
import { Logo } from "../assets/images/logo";
import Text from "../components/type";
import {
  Header,
  MobileWrapper,
  WelcomeMessage,
  Balance,
  BodyMain,
  BottomNav,
  Menu,
} from "./styles";
import Profile from "../assets/images/profile.png";
import { getCore } from "../utility/token";
import Button from "../components/button";
import "rc-slider/assets/index.css";
import { Account, Chart, Rocket, Spa } from "../assets/images/icons";

const DemoPage1 = (props) => {
  const [cost, setCost] = useState({
    available: 2200,
    captured: 200,
  });
  return (
    <MobileWrapper>
      <Header>
        <div className="wrapper">
          <Logo />
          <WelcomeMessage>
            <img src={Profile} alt="Profile" />
            <div>
              <Text overide className="sub" type="title.small">
                Good Morning
              </Text>
              <Text overide type="title.large">
                Indiana!
              </Text>
            </div>
          </WelcomeMessage>
        </div>
      </Header>
      <Balance shadow={getCore("elevation.2")}>
        <div>
          <Text type="title.small">Available</Text>
          <Text color="success" type="title.medium">
            €{cost.available}
          </Text>
        </div>
        <div>
          <Text type="title.small">Remaining</Text>
          <Text color="error" type="title.medium">
            €{cost.available - cost.captured}
          </Text>
        </div>
      </Balance>
      <BodyMain shadow={getCore("elevation.1")}>
        <Text type="title.large">How much do you want to withdraw?</Text>
        <Text type="display.large">€{cost.captured}</Text>
        <Slider
          min={0}
          max={cost.available}
          value={cost.captured}
          onChange={(e) => setCost({ ...cost, captured: e })}
        />
        <div />
        <Button>Request amount</Button>
      </BodyMain>
      <BottomNav>
        <Menu className="active" label="Profile" icon={<Account />} />
        <Menu label="Stats" icon={<Chart />} />
        <Menu label="Request" icon={<Rocket />} />
        <Menu label="Wellbeing" icon={<Spa />} />
      </BottomNav>
    </MobileWrapper>
  );
};

export default DemoPage1;
