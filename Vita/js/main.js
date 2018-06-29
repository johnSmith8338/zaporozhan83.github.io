$(document).ready(function () {
    initMap();
    initSlider();
    initGallery();
    $('#nav').onePageNav();
});

function initMap() {
    var coordinates = {
            lat: 45.937996,
            lng: 30.295414
        },
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 15,
            disableDefaultUI: Boolean,
            styles: [
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#bcdb97"
            }
        ]
    },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d1ae77"
            },
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "administrative.locality",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d1ae77"
            },
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#d1ae77"
            }
        ]
    },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d0e9ad"
            }
        ]
    },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d0e9ad"
            }
        ]
    },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d0e9ad"
            },
                        {
                            "visibility": "on"
            }
        ]
    },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": "-55"
            },
                        {
                            "visibility": "simplified"
            },
                        {
                            "hue": "#00ffff"
            }
        ]
    },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "gamma": "2.45"
            },
                        {
                            "weight": "4.29"
            },
                        {
                            "color": "#a7ca74"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d1ae77"
            },
                        {
                            "visibility": "on"
            },
                        {
                            "weight": "3.30"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "saturation": "100"
            },
                        {
                            "lightness": "5"
            },
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#a2db97"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#d1ae77"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#d1ae77"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#29cfff"
            }
        ]
    }
]

        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
}

function initSlider() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
    ]
    });
}

function initGallery() {
    $(".fancybox").attr('rel', 'gallery')
        .fancybox({
            padding: 0
        });
}