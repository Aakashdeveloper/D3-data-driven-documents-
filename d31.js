var w = 100;
var h = 100;
var padding = 2;
var dataset = [5,10,15,20,25];
var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);
/*	     
svg.selectAll("rect").data(dataset).enter().append("rect").attr("x",function(d,i){
      return(i* 30);
    }).attr("y",0).attr("width",20).attr("height",100);
*/
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d,i){
      return(i* (w/dataset.length));
    })
    .attr("y",function(d, i){
	return h-d;
	})
    .attr("width",w/dataset.length-padding)
    .attr("height",function(d){
	return d;});
