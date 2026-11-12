/*var user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
document.getElementByID("Welcome").innerHTML = "Hello, Welcome" + user_name + */
var webmaps = [
  [
    "Galveston Island State Park",
    "https://tpwd.texas.gov/spdest/parkinfo/maps/gis/galveston_island/"
  ],
  [
    "This map shows the public kayak and walking trails at Galveston Island Park in Galveston, TX.<br>" +
    "The stengths of this map are its simplicity and familiarity.<br>" +
    "Although its simplicity is a strength, I think it is too simple and could benefit from more elaboration.<br>" +
    "The interface is very easy to manage and doesn’t need much interpretation, as it is very direct and not too detailed."
  ],
  [
    "Austin Bike Routes Web Map",
    "https://austin.maps.arcgis.com/apps/webappviewer/index.html?id=c7fecf32a2d946fabdf062285d58d40c"
  ],

  [
    "This map displays all bike paths in the big, populous city of Austin and rank them from high comfort to low comfort based on convenience and safety. .<br>" +
    "Its strengths are that it is direct and highly detailed, making it concise and informative.<br>" +
    "The application was designed for Austin citizens who bike regularly.<br>" +
    "The application is very easy to navigate. It’s very straightforward. If I were to redesign it, I would change the colors to make them more distinctive, especially the lines in the same comfort category."
  ]
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

      if (row % 2==0)
      {
        for (var column=0; column < webmaps[0].length; column++)
        {
          document.write("<td>" + webmaps[row][column] + "</td>");
        }
      }
      else
      {
        document.write(
          "<td colspan='2' class='webmap-description'>" +
          webmaps[row][0] +
          "</td>"
        );
      }
      document.write("</tr>");
    }
    document.write("</table>");
    return "";
}
