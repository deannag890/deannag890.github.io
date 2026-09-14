document.writeIn("<button onclick='condition()'>Conditional Test</button");
function condition ()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeIn("You chose Okay!");
  }
  else
  {
    document.writeIn("You chose Cancel!")
  }
}
