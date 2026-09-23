/*var user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
document.getElementByID("Welcome").innerHTML = "Hello, Welcome" + user_name + */
var webmaps =
[
  ["Interactive Map of Galveston Island State Park Trails", "https://tpwd.texas.gov/spdest/parkinfo/maps/gis/galveston_island/",
  "Map of Kayak and hiking trails developed by Texas Parks and Wildlife.",]
  ["Bike routes in Austin, TX", "https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=c7fecf32a2d946fabdf062285d58d40c",
  "Highly detailed and informative bike route map of Austin's Metroolitian area",]
  ["Campus Map of Texas State University", "https://map.concept3d.com/?id=308#!ct/18453,19314,49975?s/",
"This map is very simple, efficient, and straight-forward."]
];
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// a prompt box is used to prompt users to input a value before editing a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      if (row % 2 == 0)
      {
      document.write("<td>" + webmaps[0][1] + "</td>");
    }
    else
    {
      document.write("<td>" + webmaps[1][0] + "</td">);
    }
    document.write("</tr>");
  }
  document.write("/table");
  return "";
}
