/*
Name: Aaditya Mukherjee
Affiliation: Computer Science Student at UMass Lowell
E-mail: Aaditya_Mukherjee@student.uml.edu
91.61 GUI Programming I, Assignment 6
Sources: https://www.youtube.com/watch?v=zhxQhgm4yk4&t=200s    (The first two sources were used to figure out how to make multiplication tables with for loops)
       : https://www.youtube.com/watch?v=zhxQhgm4yk4&t=200s
*/

function generate() {

  var h1 = Number(document.getElementById("min_column").value);   //getting row and column values through their given ids
  var h2 = Number(document.getElementById("max_column").value);

  var v1 = Number(document.getElementById("min_row").value);
  var v2 = Number(document.getElementById("max_row").value);

  if(!Number.isInteger(h1) || !Number.isInteger(h2) || !Number.isInteger(v1) || !Number.isInteger(v2)){ //Check if input is a number

    alert("Sorry, it looks like there is invalid input, please try again.");

  }

  else if (h1>h2 || v1>v2) {                                        //check if the lower limits are greater than the upper limits

    alert("The lower limit cannot be greater than the upper limit");

  }

  else {                                                                    //else create table

      var output = "<tr><th> </th>";

      for(var i = h1; i <= h2; i++){

        output += "<th>" + i + "</th>"; // adds input values for columns

      }

      output += "</tr>";

      for(var j = v1; j <= v2; j++) {

        output += "<tr><th>" + j + "</th>"; //adds input values for rows

        for(var x = h1; x <= h2; x++) {

        output += "<td>" + j*x + "</td>"; //Table cells get filled with the appropriate calculations of the column and row heads

        }

        output += "</tr>";

      }


       var table = document.getElementById("multi_table").innerHTML = output;   // the below helps in printing the output on its location in the HTML file.

  }

}
