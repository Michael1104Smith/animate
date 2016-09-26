function drawChart(ind) {
    var i;

    graph.append("circle")
        .style("fill", color_arr[ind])
	    .attr("r", dotR)
	    .attr("cx", ptX_arr[ind])
	    .attr("cy", ptY_arr[ind]);

	for(i = 0; i < number_arr[ind]; i++){
    	graph.append("line")
        .style("stroke", color_arr[ind])
    	.style("stroke-width",dotR/2)
	    .attr("x1", ptX_arr[ind-i-1])
	    .attr("y1", ptY_arr[ind-i-1])
	    .attr("x2", ptX_arr[ind-i-1])
	    .attr("y2", ptY_arr[ind-i-1])
		  .transition()
		  .duration(500)
		  .attr({
		    x2: ptX_arr[ind],
		    y2: ptY_arr[ind]
		  });
	}
}