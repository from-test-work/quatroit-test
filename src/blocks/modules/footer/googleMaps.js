import config from './config';
import GoogleMapsLoader from 'google-maps';

export default class Map {
    constructor(mapID) {
        this.map = document.getElementById(mapID);
        this.config = config.gmapConfig;
    }

    init(position) {
        GoogleMapsLoader.KEY = this.config.KEY;
        GoogleMapsLoader.VERSION = this.config.VERSION;
        GoogleMapsLoader.load((google) => {
            new google.maps.Map(this.map, {
                center: position,
                zoom: this.config.zoom,
                styles: this.config.snazyStyles,
                disableDefaultUI: true,
            });
        });
    }
}


