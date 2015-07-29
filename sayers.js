
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
    var bioDiv = document.getElementById("bio");
    bioDiv.innerHTML = d.blurb;
  }

// var keys = ["family", "Bluntisham", "Godolphin", "Somerville", "Oxford", "France", "London"];

// for (i = 0; i < keys.length; i++) {
//   key = keys[i];
//   document.getElementById(key).addEventListener("mouseover", function(){
//     d3.selectAll("circle").each(function(d) {
//       if (d.category !== key && d.category !== "self")
//       {
//         $(this).css("opacity", "0.2");

//       }
//     })
//     d3.selectAll("text").each(function(d) {
//       if (d.category !== key && d.category !== "self")
//       {
//         $(this).css("opacity", "0.2");
//       }
//     })
//   });

//   document.getElementById(key).addEventListener("mouseout", function(){
//     d3.selectAll("circle").transition()
//           .style("opacity", 1);
//     d3.selectAll("text").transition()
//           .style("opacity", 1);
//   });
// }

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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "family" && source.category !== "family")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("family").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "Bluntisham" && source.category !== "B")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("Bluntisham").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "Godolphin" && source.category !== "Godolphin")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("Godolphin").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "Somerville" && source.category !== "Somerville")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("Somerville").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "Oxford" && source.category !== "Oxford")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("Oxford").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "London" && source.category !== "London")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("London").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
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
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.category !== "L'Ecole des Roches" && source.category !== "L'Ecole des Roches")
    {
      $(this).css("stroke", "white");
    }
  })
});

document.getElementById("France").addEventListener("mouseout", function(){
  d3.selectAll("circle").transition()
        .style("opacity", 1);
  d3.selectAll("text").transition()
        .style("opacity", 1);
  d3.selectAll(".link").transition()
        .style("stroke", "black");
});

var slider = document.getElementById('range');

noUiSlider.create(slider, {
  start: 1913,
  step: 1,
  range: {
    'min': [ 1893 ],
    'max': [ 1957 ]
  },
  pips: {
    mode: 'positions',
    values: [0,25,50,75,100],
    density: 4
  }
});

var sliderValueElement = document.getElementById('slider-range-value');

slider.noUiSlider.on('update', function( values, handle ) {
  var year = Math.round(values[handle]);
  sliderValueElement.innerHTML = "Year: " + year;
});

var checkbox = document.getElementById('checkbox');

function toggle ( element ){

  // If the checkbox is checked, disabled the slider.
  // Otherwise, re-enable it.
  if ( this.checked ) {
    element.setAttribute('disabled', true);
    d3.selectAll("circle").each(function(d) {
      {
        $(this).css("opacity", "1");
      }
    });
    d3.selectAll(".link").each(function(d) {
      $(this).css("stroke", "black");
    });
  } else {
    element.removeAttribute('disabled');
  }
}

checkbox.addEventListener('click', function(){
  toggle.call(this, slider);
});

slider.noUiSlider.on('change', function(){
  var sliderValue = slider.noUiSlider.get();
  d3.selectAll("circle").each(function(d) {
    if (d.start_date <= sliderValue && d.end_date >= sliderValue)
    {
      $(this).css("opacity", "1");
    }
    else
    {
      $(this).css("opacity", ".2");
    }
  })
  d3.selectAll(".link").each(function(d) {
    var target = d.target;
    var source = d.source;
    if (target.start_date <= sliderValue && target.end_date >= sliderValue && source.start_date <= sliderValue && source.end_date >= sliderValue)
    {
      $(this).css("stroke", "black");
    }
    else
    {
      $(this).css("stroke", "white");
    }
  })
});


