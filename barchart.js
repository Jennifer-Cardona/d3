var dataset = [70,60,40,120,180];
var svgWidth = 500; 
var svgHeight = 300;
var barPadding = 5;

var barWidth = (svgHeight/ dataset.length);  

var svg = d3.select('svg') //we select the svg container 
    .attr('width', svgWidth) 
    .attr('height', svgHeight); 

var barChart = svg.selectAll('rect') //create a bar char---we select all rect  
    .data(dataset)
    .enter() //will take the dataset 
    //it would do all this method for all the elements in the dataset 
    .append("rect") 
    .attr("y", function(d){
        return svgHeight -d   
    })
    .attr("height", function(d){  //height 
        return d; 
     })
     .attr("width",barWidth - barPadding) //
     .attr("transform", function(d,i){   //
        var translate = [barWidth * i, 0]; // we want to translate one after another one. h  
        return "translate("+ translate +")"; // return  the value we calcutlate before 

     }); 
