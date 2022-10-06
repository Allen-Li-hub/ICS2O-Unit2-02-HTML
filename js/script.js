// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  // this function does area and perimeter

  document.getElementById("area").innerHTML = "The area is: " + 5 * 3 + " cm²."
  document.getElementById("perimeter").innerHTML =
    "The perimeter is: " + 2 * (5 + 3) + " cm."
}
