const m0 = {
  id: "5e8e149677a863e8@219",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# GSM points Spain
Just a few for test purpose
`
)})
    },
    {
      name: "map",
      inputs: ["DOM","width","L","pointsGSM"],
      value: (function*(DOM,width,L,pointsGSM)
{
  let container = DOM.element('div', { style: `width:${width}px;height:${width/1.6}px` });
  
  yield container;
  
  let map = L.map(container).setView([40,-3.7], 7);
  
  
  // see   https://beta.observablehq.com/@mradamcox/wi-spring-viewer
  
  let latlongpopup = L.popup({'className' : 'latlong-popup'});
  map.on("contextmenu", function (event) {
    let latitude = event.latlng.lat.toFixed(4);
    let longitude = event.latlng.lng.toFixed(4);
    let gm = 'http://maps.google.com/maps?z=7&t=k&q=loc:'+latitude+'+'+longitude;
    let gmlink = '<br><a href="'+gm+'" target="_blank">google maps</a>'
    latlongpopup
        .setLatLng(event.latlng)
        .setContent(latitude+', '+longitude+'<br>zoom level: '+map.getZoom()+gmlink)
        .openOn(map);
  });  
  

  
  
  let osmLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png', {
      attribution: 'Wikimedia maps beta | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

   let googleMap = L.tileLayer('http://{s}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
  });
  
 
    let markerList = [];
    let currentLayer = L.markerClusterGroup({
        chunkedLoading: true,
        maxClusterRadius: 50
    });
  
       for (var i=0; i< pointsGSM.features.length ;i++)  {
        
              let marker = L.marker(L.latLng(pointsGSM.features[i].properties.Gis_Latitud,
                                             pointsGSM.features[i].properties.Gis_Longitud),
              {
                 // title: title
              });

   
         
         var list = 
         //   "<b>" + pointsGSM.features[i].properties.Gis_Codigo + "</b>" + "</br>"
         
         "<strong style='color: #84b819'>" + pointsGSM.features[i].properties.Gis_Codigo + "</strong>" + "</br>"
          + "<br>"
          + "<b>Dirección:&nbsp;</b>" + pointsGSM.features[i].properties.Dirección + "</br>"
          + "<b>Etiqueta:&nbsp;</b>" + pointsGSM.features[i].properties.Gis_Etiqueta + "</br>"
          + "<b>Tipo:&nbsp;</b>" + pointsGSM.features[i].properties.Tipo + "</br>"
          + "<b>Latitud:&nbsp;</b>" + pointsGSM.features[i].properties.Gis_Latitud + "</br>"
          + "<b>Longitud:&nbsp;</b>" + pointsGSM.features[i].properties.Gis_Longitud + "</br>"

         marker.bindPopup(list);         

       //  marker.bindPopup(title);
         markerList.push(marker);
       }
  

  
  
  currentLayer.addLayers(markerList);
  
  map.addLayer(currentLayer);
  
  
  let baseLayers = {
  
    "osm":osmLayer,
    "google":googleMap,
    
  };
  
  
  let overlayLayers = {
  };
 
  
  let c_layers = new L.control.layers(baseLayers, overlayLayers,{position:'topright',collapsed:true})
  map.addControl(c_layers);

  // Add the initial state. The order is no longer important.
//  osmLayer.addTo(map);
//  googleMap.addTo(map);
  
 map.on('click', onMapClick);
  
  
      //Listener function taking an event object 
      function onMapClick(e) {
      	 //map click event object (e) has latlng property which is a location at which the click occured.
      //alert(1234);
      }  
  
  
   }
)
    },
    {
      name: "pointsGSM",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://gist.githubusercontent.com/op07n/ba0f15a64348b01261587e5fbd5b10df/raw/2415a3224b14fd5c5af795ebd5103176a7cdef05/pointsGSM.dat")
)})
    },
    {
      name: "L",
      inputs: ["require"],
      value: (async function(require)
{
  const L = window.L = await require('leaflet@1.3.1');
  await require('leaflet.markercluster');
  return L;
}
)
    },
    {
      inputs: ["html","resolve"],
      value: (function(html,resolve){return(
html`<link href='${resolve('leaflet@1.3.1/dist/leaflet.css')}' rel='stylesheet' />
<link href='${resolve('https://unpkg.com/leaflet.markercluster@1.0.3/dist/MarkerCluster.Default.css')}' rel='stylesheet' />
<p>loading: <b>leaflet.css</b></p>`
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    },
    {

    }
  ]
};

const notebook = {
  id: "5e8e149677a863e8@219",
  modules: [m0]
};

export default notebook;
