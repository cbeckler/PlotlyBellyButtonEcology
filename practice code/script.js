/// use d3.selectAll() to create event listener
///     on change to HTML body, update page
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // select dropdown menu
  var dropdownMenu = d3.selectAll("#selectOption").node();
    // select ID of dropdown menu
  var dropdownMenuID = dropdownMenu.id;
    // select value of selected option
  var selectedOption = dropdownMenu.value;

  console.log(selectedOption);
};