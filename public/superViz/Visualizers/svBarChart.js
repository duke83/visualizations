/**
 * Created by kmerrell on 10/3/2014.
 */

appCreateReport.directive('svBarChart',function(){
    "use strict";
    return{
        restrict:'E',
        templateUrl: 'public/superViz/Visualizers/sv-bar-chart.html',
        link: function (scope, el, attrs) {
            scope.chart = {
                "type": "ColumnChart",
//                 "cssStyle": "height:500px; width:200px;",
                "data": {
                    "cols": [
                        {
                            "id": "month",
                            "label": "Month",
                            "type": "string",
                            "p": {}
                        },
                        {
                            "id": "laptop-id",
                            "label": "Laptop",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "desktop-id",
                            "label": "Desktop",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "server-id",
                            "label": "Server",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "cost-id",
                            "label": "Shipping",
                            "type": "number"
                        }
                    ],
                    "rows": [
                        {
                            "c": [
                                {
                                    "v": "January"
                                },
                                {
                                    "v": 19,
                                    "f": "42 items"
                                },
                                {
                                    "v": 12,
                                    "f": "Ony 12 items"
                                },
                                {
                                    "v": 7,
                                    "f": "7 servers"
                                },
                                {
                                    "v": 4
                                }
                            ]
                        },
                        {
                            "c": [
                                {
                                    "v": "February"
                                },
                                {
                                    "v": 13
                                },
                                {
                                    "v": 1,
                                    "f": "1 unit (Out of stock this month)"
                                },
                                {
                                    "v": 12
                                },
                                {
                                    "v": 2
                                }
                            ]
                        },
                        {
                            "c": [
                                {
                                    "v": "March"
                                },
                                {
                                    "v": 24
                                },
                                {
                                    "v": 0
                                },
                                {
                                    "v": 11
                                },
                                {
                                    "v": 6
                                }
                            ]
                        }
                    ]
                },
                "options": {
                    legend:{position:"none"},
                    colors:['#3399FF','#5CADFF','#3D5C99','#6699FF'],
                    "isStacked": "false",
                    animation:{
                        duration: 1000,
                        easing: 'out'
                    },
                    "fill": 20,
                    "displayExactValues": true,
                    "vAxis": {
                        "title": "Count",
                        "gridlines": {
                            "count": 6
                        }
                    },
                    "hAxis": {
                        "title": "Month"
                    }
                },
                "formatters": {},
                "displayed": true
            }
        }
    }
})