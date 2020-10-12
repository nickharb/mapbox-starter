/**
 * Mapbox Starter
 *
 * Created by Seven Mile Media
 * http://sevenmilemedia.com/
 */

(function($) {

    $(document).ready(function() {

        mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja2hhcmIiLCJhIjoiY2pucnN4cWloMGJveTNxbjJ4dzg3dGM4eCJ9.YHcYBuehFvoDyGiJr6dBig';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [-73.944, 40.746], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });

    });

})(jQuery);
