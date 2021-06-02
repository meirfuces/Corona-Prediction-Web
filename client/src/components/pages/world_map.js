import React , { useState } from "react";
import MainHeader from '../Layout/cart/mainHeader';
import { WorldMap } from "react-svg-worldmap";

//change
// import {
//     ComposableMap,
//     Geographies,
//     Geography,
//     Graticule,
//     ZoomableGroup
//   } from "react-simple-maps";
  
//   const geoUrl =
//     "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  
  const World_map = () => {
//     const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  
//     function handleZoomIn() {
//       if (position.zoom >= 4) return;
//       setPosition(pos => ({ ...pos, zoom: pos.zoom * 5 }));
//     }
  
//     function handleZoomOut() {
//       if (position.zoom <= 1) return;
//       setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
//     }
  
//     function handleMoveEnd(position) {
//       setPosition(position);
//     }
const stylingFunction = (context ) => {
  const opacityLevel = 0.1 + (1.5 * (context.countryValue - context.minValue) / (context.maxValue - context.minValue))
  return {
      fill: context.color, 
      fillOpacity: opacityLevel, 
      stroke: "green", 
      strokeWidth: 1, 
      strokeOpacity: 0.2, 
      cursor: "pointer" 
         }
}
const data =
[
  { country: "cn", value: 138 }, // china
  { country: "in", value: 131 }, // india
  { country: "us", value: 331 },  // united states
  { country: "id", value: 264 },  // indonesia
  { country: "pk", value: 350},  // pakistan
  { country: "br", value: 210 },  // brazil
  { country: "ng", value: 208 },  // nigeria
  { country: "bd", value: 15 },  // bangladesh
  { country: "ru", value: 141 },  // russia
  { country: "mx", value: 12 },   // mexico
  {country: "il", value:1500}, //israel
  {country: "gy", value:1500}, //Guyana
  {country: "gh", value:1500}, //Ghana
  {country: "CL", value:1500}, //CHILE
  {country: "et", value:1500} //etupia

]
    return (
        <React.Fragment>
        <MainHeader />
        <div  >
       <WorldMap styleFunction= {stylingFunction} color="red" title="corona death" value-suffix="people" size="xl" data={data} />
       <a href= "https://reactjsexample.com/a-simple-compact-and-free-react-svg-world-map/"><h3 > https://reactjsexample.com/a-simple-compact-and-free-react-svg-world-map/</h3></a>
    </div>
    <h2>https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</h2>
{/* <h1>World_map corona</h1>
<a href= "https://www.react-simple-maps.io"><h3 > https://www.react-simple-maps.io/</h3></a>
<hr></hr>

      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-20.0, -52.0, 0],
          scale: 70,
          width: 6000,
          height: 400
        }}
      >
        <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
        <Graticule stroke="#EAEAEC" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#9998A"
                stroke="#EAEAEC"
              />
            ))
          }
        </Geographies>
        </ZoomableGroup>
      </ComposableMap> */}
      </React.Fragment>
    );
  };
  
  export default World_map;
  

