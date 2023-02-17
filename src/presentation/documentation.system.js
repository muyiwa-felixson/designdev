import { useState } from "react";
import Text from "../components/type";
import { Banner } from "../presentation";
import { sys } from "../utility/token";
import {
  Grider,
  Liner,
  ColorBox,
  FontBox,
  FontSize,
  ElevationBox,
  PageGrid,
} from "./documentation.style";

const getObjectDepth = (object) => {
  let string = JSON.stringify(object)
    .split("")
    .filter((char) => ["{", "}"].includes(char));

  let currentDepth = 0;
  let maxDepth = 0;
  string.forEach((char) => {
      if (char === '"{') currentDepth--;
      if (char === "{") currentDepth++;
    if (char === "}") currentDepth--;
    if (currentDepth > maxDepth) maxDepth = currentDepth;
  });

  return maxDepth;
};
const RenderSubSections = ({ data }) => {
  return Object.keys(data).map((elem) => {
    if (getObjectDepth(data[elem]) === 2) {
      return (
        <Grider>
          <Text type="title.small">
            {elem} {getObjectDepth(data[elem])}
          </Text>
          <div>
            <RenderLastSections data={data[elem]} />
          </div>
        </Grider>
      );
    } else if (getObjectDepth(data[elem]) === 1) {
      return (
        <Liner>
          <Text type="title.small">
            {elem} {getObjectDepth(data[elem])}
          </Text>
          <div>
            <RenderLastSection data={data[elem]} />
          </div>
        </Liner>
      );
    } else {
      return (
        <div key={elem}>
          <Text type="title.small">
            {elem} {getObjectDepth(data[elem])}
          </Text>
          <br />
          {typeof data[elem] === "object" && (
            <RenderSubSections data={data[elem]} />
          )}
        </div>
      );
    }
  });
};

const RenderLastSections = ({ data }) => {
  //   console.log("Rendered data", data);
  if (data.type) {
    switch (data.type) {
      case "boxShadow":
        return <ElevationBox {...data} title={data.title} />;
      default:
        return "";
    }
  } else {
    return Object.keys(data).map((elem) => {
      console.log(data[elem]);
      switch (data[elem].type) {
        case "color":
          return <ColorBox {...data[elem]} title={elem} />;
        case "fontFamilies":
          return <FontBox {...data[elem]} />;
        case "fontWeights":
          return <FontBox {...data[elem]} />;
        case "boxShadow":
          return <ElevationBox {...data[elem]} title={elem} />;
        case "fontSizes":
          return <FontSize {...data[elem]} />;
        case "dimension":
          return <FontSize {...data[elem]} />;
        default:
          return "";
      }
    });
  }
};
const RenderLastSection = ({ data }) => {
  switch (data.type) {
    case "color":
      return <ColorBox {...data} title={data.title} />;
    case "fontFamilies":
      return <FontBox {...data} />;
    case "fontWeights":
      return <FontBox {...data} />;
    case "fontSizes":
      return <FontSize {...data} />;
    case "dimension":
      return <FontSize {...data} />;
    case "boxShadow":
      return <ElevationBox {...data} title={data.title} />;
    default:
      return "";
  }
};
const RenderSections = ({ path }) => {
  const [inView, setInView] = useState(0);
  return (
    <PageGrid>
      <div className="sidemenu">
        {Object.keys(sys.sys).map((elem, index) => {
          return (
            <div
              key={`menu_${elem}`}
              className={index === inView ? "active" : ""}
              onClick={() => setInView(index)}
            >
              <Text type="body.large">{elem}</Text>
            </div>
          );
        })}
      </div>
      <div>
        {Object.keys(sys.sys).map((elem, index) => {
          return (
            <div
              key={`container_${elem}`}
              className={`inview ${index === inView ? "active" : ""}`}
            >
              <div className="section_title">
                <Text type="headline.large">{elem}</Text>
              </div>
              {typeof path[elem] === "object" && (
                <RenderSubSections data={path[elem]} />
              )}
            </div>
          );
        })}
      </div>
    </PageGrid>
  );
};
function DocumentationSystem() {
  return (
    <div className="viewer">
      <Banner title="System" />
      <br />
      <RenderSections path={sys.sys} />
    </div>
  );
}

export default DocumentationSystem;
