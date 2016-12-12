var w = 300;
var h = 200;
var padding = 2;
var dataset = [5,10,15,20,25,11,24,33,10,8];
var svg = d3.select("body")
            .append("svg")
	    .attr("width",w)
	    .attr("height",h);
/*	     
svg.selectAll("rect").data(dataset).enter().append("rect").attr("x",function(d,i){
      return(i* 30);
    }).attr("y",0).attr("width",20).attr("height",100);
*/
/** function for dynamic color**/
function colorPicker(v){
    if(v<=10){return "#666666";}
    else if(v>=10 && v<=20){return "#FF0033";}
    
    
}
/****Giving Dynamic color*****/
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d,i){
      return(i* (w/dataset.length));
    })
    .attr("y",function(d, i){
	return h-d*4;
	})
    .attr("width",w/dataset.length-padding)
    .attr("height",function(d){
	return d*4;})
    .attr("fill",function(d){
	    return colorPicker(d);
	});

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){return d;})
    .attr("text-anchor","middle")
    .attr("x",function(d,i){
      return(i* (w/dataset.length)+(w/dataset.length-padding)/2);
    })
    .attr("y",function(d, i){
	return h-d*4+14;
	})
    .attr("fill","#ffffff");
		
/****Giving static color****
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d,i){
      return(i* (w/dataset.length));
    })
    .attr("y",function(d, i){
	return h-d*4;
	})
    .attr("width",w/dataset.length-padding)
    .attr("height",function(d){
	return d*4;})
    .attr("fill",function(d){
	    return "rgb("+(d*10)+",0,0)"
	});
*/

/*
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
	x : function(d,i){return i* (w/dataset.length)},
        y : function(d){return h-(d*4)},
   width  : w/dataset.length-padding,
   height : function(d){return d*4},
    fill  : function(d){return "rgb("+(d*10)+",0,0)"}
	});

*/
