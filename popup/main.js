import "./assets/main.css";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";

defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets",
});
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });

const mapElement = document.querySelector('arcgis-map');
const featuresElement = document.querySelector("arcgis-features");
mapElement.addEventListener('arcgisViewReadyChange', event => { 
}); 
mapElement.addEventListener('click',(event)=>{
  console.log("CLICK")

  featuresElement.open({
    location: mapElement.toMap(event),
    fetchFeatures: true
  });
})