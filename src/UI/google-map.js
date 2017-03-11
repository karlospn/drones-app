import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

    constructor(centerMap, data)
    {
        super();
        this.centerMap = centerMap;
        this.data = data;
    }

    createElement()
    {
        super.createElement();

        setTimeout(() => {

            var map = new google.maps.Map(document.getElementById('map'), {
                center: this.centerMap,
                zoom: 13
            });

            for(let item of this.data){
                let [lat, long] = item.latLong.split(' ');
                let myLatLng = new window.google.maps.LatLng(lat, long); 

                 var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map
                });

                marker.setMap(map);
            }
        }, 
        0);
    }

    getElementString(){
        return `<div style="width:800px; height:400px;" id="map"></div>`;
    }

}