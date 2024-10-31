/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "./assets/style.css";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

/**
 * Define the custom elements on the window using the Calcite Components
 * Use the CDN-hosted assets. When using the CDN-hosted assets,
 * you need to keep the version number in the path the same as the version of
 * `@esri/calcite-components` installed as a dependency of `@arcgis/map-components`.
 */
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.13.0/assets" });

/**
 * Use the Map Components to define and lazy load the custom map elements.
 */
defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.31/assets" });



document.querySelector("arcgis-map").addEventListener("arcgisViewReadyChange", (event) => {

  const mapElem = document.querySelector("arcgis-map");
  const tableElem = document.querySelector("arcgis-feature-table");
  mapElem.addEventListener("arcgisViewReadyChange", async () => {
    const featureLayer = mapElem.map.layers.getItemAt(0);
    featureLayer.title = "USFS Recreational areas";
    tableElem.layer = featureLayer;
  });
  mapElem.addEventListener("arcgisViewChange", () => {
    tableElem.filterGeometry = mapElem.extent;
  });
});
