function xhrCallback(xhr) {

}

window.onload = function() {
  var url = "https://script.google.com/macros/s/AKfycbyW5fZXgNokXnjuKAStEUwpUID8-nU5z3ugpXs_fqBK1VCfzU8/exec"
  var getFlowshare = document.getElementById("get-flowshare");
  getFlowshare.onclick = function() {
    console.log("Clicked");
    var inputValue = document.getElementById("email-input").value;
    console.log("Input: " + inputValue);
    if (inputValue) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        console.log(request.readyState);
        if (request.readyState == 4) {
          console.log("Success");
          xhrCallback(request);
        }
      };
      var urlWithData = url + "?email=" + inputValue;
      request.open("GET", urlWithData);
      request.send();
    }
  };
}
