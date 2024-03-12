import "./assets/main.css";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import {getTimeSliderSettingsFromWebMap} from "@arcgis/core/support/timeUtils";
defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets",
});
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.cßom/map-components/4.29/assets" });

const mapElement = document.querySelector('arcgis-map');

mapElement.addEventListener('arcgisViewReadyChange', event => { 
 const timeElement = document.querySelector("arcgis-time-slider");
 
 getTimeSliderSettingsFromWebMap(mapElement.map).then(timeProperties=>{

  const {fullTimeExtent,loop,mode,stops,timeExtent,playRate} = timeProperties;
  timeElement.fullTimeExtent = fullTimeExtent;
  timeElement.loop = loop;
  timeElement.mode = mode;
  timeElement.timeExtent = timeExtent;
  timeElement.playRate = playRate;
  timeElement.stops = stops;
 });
  
}); 
