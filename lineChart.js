var w = 100;
var h = 200;

monthlySales = [
    {"month":10, "sales":10},
    {"month":20, "sales":70},
    {"month":30, "sales":64},
    {"month":40, "sales":51},
    {"month":50, "sales":45},
    {"month":60, "sales":30},
    {"month":70, "sales":16},
    {"month":80, "sales":23},
    {"month":90, "sales":50}
    
];


var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);


var lineFun = d3.line()
.x(function(d){return d.month*2;})
.y(function(d){return d.sales;});

   
var viz = svg.append("path")
.attr("d",lineFun(monthlySales))
.attr("stroke","purple")
.attr("stroke-width","2")
.attr("fill","none");

