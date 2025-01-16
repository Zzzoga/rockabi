ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.74989999998744,37.625566772460935],
        zoom: 12,
        // Добавим панель маршрутизации.
    });

    var Moscow = new ymaps.Placemark([55.764496,37.594611], null,{
        iconLayout: 'default#image',
    });
    myMap.geoObjects.add(Moscow);


});

ymaps.ready(function () {
    var myMap = new ymaps.Map('cart__delivery__map', {
        center: [55.74989999998744,37.625566772460935],
        zoom: 12,
        // Добавим панель маршрутизации.
    });

    var Moscow = new ymaps.Placemark([55.764496,37.594611], null,{
        iconLayout: 'default#image',
    });
    myMap.geoObjects.add(Moscow);


});

