export interface Mappable {
    location: {
        lat: number,
        lng: number
    };

    markerContent(): string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    };


    addMarker(item: Mappable): void {
        const maker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: item.location.lat,
                lng: item.location.lng
            }
        });

        maker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: item.markerContent()
            });

            infoWindow.open(this.googleMap, maker);
        })
    }
}
