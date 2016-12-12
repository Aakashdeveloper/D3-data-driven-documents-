var w = 500;
var h = 200;

monthlySales = [
    {"month":10, "sales":10},
    {"month":20, "sales":20},
    {"month":30, "sales":64},
    {"month":40, "sales":51},
    {"month":50, "sales":45},
    {"month":60, "sales":70},
    {"month":70, "sales":36},
    {"month":80, "sales":33},
    {"month":90, "sales":50},
    {"month":100, "sales":100}
    
];


var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);


var lineFun = d3.line()
.x(function(d){return d.month*2;})
.y(function(d){return h-d.sales;});

   
var viz = svg.append("path")
.attr("d",lineFun(monthlySales))
.attr("stroke","purple")
.attr("stroke-width","2")
.attr("fill","none");

var lables = svg.selectAll("text")
   .data(monthlySales)
   .enter()
   .append("text")
   .text(function(d){return d.sales;})
   .attr("x",function(d){return d.month*2;})
   .attr("y",function(d){return h-d.sales;})
   .attr("text-anchor","start")
   .attr("fill","#666666")
   .attr("dy",".35em")
   .attr("font-",".35em")
   .attr("font-weight",function(d,i){
       if(i===0 || i==(montlySales.length-1)){
	   return "bold";
	}else{
	    return "normal";}
   })



