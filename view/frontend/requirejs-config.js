var config = {
    map: {
        "*": {

            promo:"Packt_Promo/js/promo" //custom javascript promo.js
        }
    },
    paths: {
            "jcarousel-core": "Packt_Promo/js/jquery.jcarousel-core.min",
            "jcarousel-control": "Packt_Promo/js/jquery.jcarousel-control.min",
            "jcarousel-pagination": "Packt_Promo/js/jquery.jcarousel-pagination.min"
    },
    shim: {

            "jcarousel-core": ["jquery"], //third-party libraries
            "jcarousel-control": ["jquery"],
            "jcarousel-pagination": ["jquery"]

    }
}