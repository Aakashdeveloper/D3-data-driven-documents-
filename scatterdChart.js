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

function salesKPI(d){
  if(d>=50){return "#33CC66"}
  else if(d<=50){return "#666666"}
}
function showMinMax(ds,col,val,type){
    var max = d3.max(ds,function(d){return d[col];});
    var min = d3.min(ds,function(d){return d[col];});
    
    if(type=='minmax' && (val ==max || val == min)){
	return val;
    }else if(type =='all'){
	return val;
    }
}
var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);


var dots = svg.selectAll("circle")
    .data(monthlySales)
    .enter()
    .append("circle")
    .attr("cx",function(d){return d.month*3})
    .attr("cy",function(d){return h-d.sales})
    .attr("r","5")
    .attr("fill",function(d){return salesKPI(d.sales)})


var dots = svg.selectAll("text")
     .data(monthlySales)
     .enter()
     .append("text")
     .text(function(d){return showMinMax(monthlySales,'sales',d.sales,'minmax')})
     .attr("x",function(d){return (d.month*3)-25;})
     .attr("y",function(d){return h-d.sales;})
     .attr("font-size","12px")
     .attr("fill","#666666")
     .attr("text-anchor","start")
     
     
     
     
     
     
     
     
