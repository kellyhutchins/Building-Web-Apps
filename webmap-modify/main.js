import "./assets/main.css";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";

defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.13.0/assets",
});
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.31/assets" });

const mapElement = document.querySelector('arcgis-map');

mapElement.addEventListener('arcgisViewReadyChange', event => {
  mapElement.constraints = {
    geometry: {
      spatialReference: {
        latestWkid: 3857,
        wkid: 102100
      },
      type: "extent",
      xmin: -14014396.04,
      ymin: 5569160.95,
      xmax: -12685859.33,
      ymax: 6350653.12
    },
    minScale: 5000000,
    maxScale: 0
  };

  const definitionExpression = "STATE='WA'";
  mapElement.map.layers.forEach(layer => {
    layer.definitionExpression = definitionExpression;
  });
}); 
