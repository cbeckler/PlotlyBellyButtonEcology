function init() {
    // select the dropdown menu with d3
    var selector = d3.select("#selDataset");
    
    // using .then() to get the full data from the json
    d3.json("samples.json").then((data) => {
      console.log(data);
      // storing the names
      var sampleNames = data.names;
      // iterating through names:
      sampleNames.forEach((sample) => {
        // retrieve each ID
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
init();

// takes our sample ID as the arg
function buildMetadata(sample) {
    // using d3 and then() to load in the json data
    d3.json("samples.json").then((data) => {
      // extract metadata
      var metadata = data.metadata;
      // filter for selected participant ID
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // return the first item in the results array
      var result = resultArray[0];
      // use the HTML ID to select the demographic table HTML object with d3
      var PANEL = d3.select("#sample-metadata");
      // clear panel's HTML
      PANEL.html("");
      // write the demographic results in
      PANEL.append("h6").text("ID: "+result.id)
      PANEL.append("h6").text("ETHNICITY: "+result.ethnicity)
      PANEL.append("h6").text("GENDER: "+result.gender)
      PANEL.append("h6").text("AGE: "+result.age)
      PANEL.append("h6").text("LOCATION: "+result.location);
      PANEL.append("h6").text("BBTYPE: "+result.bbtype);
      PANEL.append("h6").text("WFREQ: "+result.wfreq);
    });
  }



// this function is not called in plots.js--the html index uses it
function optionChanged(newSample) {
  // newSample = this.value, from above func
  buildMetadata(newSample);
  buildCharts(newSample);
}