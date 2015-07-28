
  var width = 750,
      height = 750;

  var svg = d3.select('svg');

  var force = d3.layout.force()
      .size([width, height])
      .friction(.9)
      .charge(-2000)
      .gravity(0.1);

  d3.json("sayers.json", function(error, graph) {
      if (error) throw error;

      force
          .nodes(graph.nodes)
          .links(graph.links)
          .start();

      var link = svg.selectAll('.link')
          .data(graph.links)
          .enter().append('line')
          .attr('class', 'link');

      var node = svg.selectAll('.node')
          .data(graph.nodes)
          .enter().append('g')
          .attr('class', 'node')
          .on("mouseover", mouseover)
          .on("mouseout", mouseout)
          .on("click", click)
          .call(force.drag);

      node.append("circle")
      .attr("r", 15)
      .style("fill", function(d) {
              if (d.category === "London") {return "#7A297A";}
              else if (d.category === "family") {return "#A30000";}
              else if (d.category === "Oxford") {return "#297A29";}
              else if (d.category === "Somerville") {return "#7ACC29";}
              else if (d.category === "Godolphin") {return "#E6E68A";}
              else if (d.category === "L'Ecole des Roches") {return "#CCA37A";}
              else if (d.category === "Bluntisham") {return "#7A5229";}
              else if (d.category === "self") {return "#2929A3";}
              else {return "black";}
          });

      node.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .style("stroke", "black")
      .text(function(d) { return d.name; });

      force.on('tick', function() {
          node.attr("transform", function(d) {
            if (d.x >= 0 && d.x <= width)
              { if (d.y >= 0 && d.y <= height)
                {return "translate(" + d.x + "," + d.y + ")";}
                else if (d.y < 0)
                  {return "translate(" + d.x + "," + 0 + ")";}
                else
                  {return "translate(" + d.x + "," + height + ")";}
              }
            else if (d.x < 0)
              { if (d.y >= 0 && d.y <= height)
                {return "translate(" + 0 + "," + d.y + ")";}
                else if (d.y < 0)
                  {return "translate(" + 0 + "," + 0 + ")";}
                else
                  {return "translate(" + 0 + "," + height + ")";}
              }
            else if (d.x > width)
              { if (d.y >= 0 && d.y <= height)
                {return "translate(" + width + "," + d.y + ")";}
                else if (d.y < 0)
                  {return "translate(" + width + "," + 0 + ")";}
                else
                  {return "translate(" + width + "," + height + ")";}
              }
          });
          link.attr('x1', function(d) { return d.source.x; })
              .attr('y1', function(d) { return d.source.y; })
              .attr('x2', function(d) { return d.target.x; })
              .attr('y2', function(d) { return d.target.y; });
          });
      });

  function mouseover() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 30);
  }

  function mouseout() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 15);
  }

  function click(d) {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 30);
    var infoDiv = document.getElementById("info");
    infoDiv.innerHTML = d.blurb;
  }

document.getElementById("family").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "family" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");

    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "family" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("family").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});

document.getElementById("Bluntisham").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "Bluntisham" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");

    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "Bluntisham" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("Bluntisham").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});

document.getElementById("Godolphin").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "Godolphin" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");

    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "Godolphin" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("Godolphin").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});

document.getElementById("Somerville").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "Somerville" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "Somerville" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("Somerville").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});

document.getElementById("Oxford").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "Oxford" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");

    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "Oxford" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("Oxford").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});

document.getElementById("London").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "London" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");

    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "London" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("London").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});


document.getElementById("France").addEventListener("mouseover", function(){
  d3.selectAll("circle").each(function(d) {
    if (d.category !== "L'Ecole des Roches" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
  d3.selectAll("text").each(function(d) {
    if (d.category !== "L'Ecole des Roches" && d.category !== "self")
    {
      $(this).css("opacity", "0.2");
    }
  })
});

document.getElementById("France").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
});


