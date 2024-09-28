import places from "./places/index.js";
import streets from "./streets/index.js";
import districts from "./districts/index.js";
import cities from "./cities/index.js";
import towns from "./towns/index.js";

// ArcGIS modules
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/geometry/Polyline",
  "esri/layers/GraphicsLayer"
], function (Map, MapView, Graphic, Polyline, GraphicsLayer) {
  // Your map logic here
  var map = new Map({
    basemap: "topo-vector",
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [106.69508635065, 10.851985339727143],
    zoom: 10,
    highlightOptions: {
      color: "rgb(123, 211, 234)",
    },
  });

  // Layers and other logic here...
  var graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  // Add data from places, streets, districts, cities, and towns
  districts.forEach(function (data) {
    graphicsLayer.add(createGraphic(data));
  });

  streets.forEach(function (data) {
    graphicsLayer.add(createGraphic(data));
  });

  cities.forEach(function (data) {
    graphicsLayer.add(createGraphic(data));
  });

  towns.forEach(function (data) {
    graphicsLayer.add(createGraphic(data));
  });

  // Function to create graphic from data
  function createGraphic(data) {
    return new Graphic({
      geometry: data.geometry,
      symbol: data.symbol,
      attributes: data.attributes,
      popupTemplate: data.popupTemplate,
    });
  }

  // Drawing lines logic
  var isDrawing = false;
  var polylinePoints = [];
  var drawLineButton = document.getElementById('drawLineButton');

  drawLineButton.addEventListener('click', function () {
    isDrawing = !isDrawing;
    drawLineButton.textContent = isDrawing ? "Đang vẽ... (click để chọn điểm)" : "Vẽ";
    if (!isDrawing) {
      polylinePoints = [];
    }
  });

  view.on("click", function (event) {
    if (isDrawing) {
      const point = [event.mapPoint.longitude, event.mapPoint.latitude];
      polylinePoints.push(point);

      if (polylinePoints.length > 1) {
        var polyline = new Polyline({
          paths: [polylinePoints]
        });

        var lineGraphic = new Graphic({
          geometry: polyline,
          symbol: {
            type: "simple-line",
            color: [226, 119, 40],
            width: 2
          }
        });

        graphicsLayer.add(lineGraphic);
      }
    }
  });
});
