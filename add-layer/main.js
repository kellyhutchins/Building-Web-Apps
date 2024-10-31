import Layer from "@arcgis/core/layers/Layer";
import "./assets/main.css";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";

defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.31/assets" });

const mapElement = document.querySelector('arcgis-map');

mapElement.addEventListener('arcgisViewReadyChange', event => {

  Layer.fromPortalItem({
    portalItem: {
      id: "d2a07e178d0645a5878f615c33537ec8"
    }
  })
    .then((layer) => {
      mapElement.map.add(layer);
    });
}); 
