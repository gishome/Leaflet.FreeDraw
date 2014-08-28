(function Example(window) {

    /**
     * Invoked once DOM is ready, and then goodness knows what happens after that.
     *
     * @method beginExample
     * @return {void}
     */
    var beginExample = function beginExample() {

        // Setup Leaflet: http://leafletjs.com/examples/quick-start.html
        var mapContainer = window.document.querySelector('section.map'),
            map          = L.map(mapContainer).setView([51.505, -0.09], 14);
        L.tileLayer('https://tiles.lyrk.org/lr/{z}/{x}/{y}?apikey=b86b18b0645848bea383827fdccb878e').addTo(map);

        var freeDraw = window.freeDraw = new L.FreeDraw({
            mode: L.FreeDraw.MODES.DELETE | L.FreeDraw.MODES.CREATE | L.FreeDraw.MODES.EDIT
        });

        freeDraw.preferences.setBoundariesAfterEdit(true);
        freeDraw.preferences.allowMultiplePolygons(true);
        freeDraw.preferences.allowPolygonMerging(true);
        freeDraw.preferences.exitModeAfterCreate(false);
        freeDraw.preferences.setPolygonSimplification(true);
        freeDraw.preferences.setHullAlgorithm('Wildhoney/ConcaveHull');

        freeDraw.on('markers', function getMarkers(eventData) {

//            var latLngs = [];
//
//            eventData.latLngs.forEach(function forEach(latLngGroup) {
//                latLngs = latLngs.concat(latLngGroup);
//            });
//
//            freeDraw.setMarkers(latLngs);

        });

        map.addLayer(freeDraw);

    };

    // Hold onto your hats!
    window.document.addEventListener('DOMContentLoaded', beginExample);

})(window);