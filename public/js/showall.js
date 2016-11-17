
(function() {
  /**
  Will change the color of text in element by class to red/green based on price
  */
  function colorPrices(elemClass) {
    for(var i = 0, j = elemClass.length; i < j; ++i) {
      if (Number(elemClass[i].innerText) > 0) {
        elemClass[i].style.color = "green";
      } else if (Number(elemClass[i].innerText) < 0) {
        elemClass[i].style.color = "red";
      } else {
        elemClass[i].style.color = "black";
      }
    }
  }

  // Change the color of the $change and $change columns
  var change = document.getElementsByClassName("class_change");
  var changeInPercent = document.getElementsByClassName("class_changeInPercent");
  var totalChange = document.getElementsByClassName("class_totalChange");
  var totalChangeInPercent = document.getElementsByClassName("class_totalChangeInPercent");
  colorPrices(change);
  colorPrices(changeInPercent);
  colorPrices(totalChange);
  colorPrices(totalChangeInPercent);

})();
