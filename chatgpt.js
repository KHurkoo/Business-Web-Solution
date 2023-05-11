var api=config.OPENAPI;
function OnLoad() {
  txtOutput = document.getElementById("txtOutput");
  txtMsg = document.getElementById("txtMsg");
  btnSend = document.getElementById("btnSend");
  selLang = document.getElementById("selLang");
  selLang.value = "en-US";
}
function Send() {
  var sQuestion = txtMsg.value;
  if (sQuestion == "") {
    alert("Please enter a question");
    return;
  }
  btnSend.disabled = true;
  txtMsg.disabled = true;
  selLang.disabled = true;
  txtOutput.value = "Thinking...";
  var oHttp = new XMLHttpRequest();
  oHttp.open("POST", "https://api.openai.com/v1/engines/davinci/completions", true);
  oHttp.setRequestHeader("Content-Type", "application/json");
  oHttp.setRequestHeader("Authorization", "Bearer " + api);
  oHttp.onreadystatechange = function() {
    if (oHttp.readyState == 4 && oHttp.status == 200) {
      var oResult = JSON.parse(oHttp.responseText);
      txtOutput.value = oResult.choices[0].text;
    }
  }
  var sBody = JSON.stringify({
    "prompt": sQuestion + "\nAI:",
    "max_tokens": 150,
    "temperature": 0.9,
    "top_p": 1,
    "n": 1,
    "stream": false,
    "logprobs": null,
    "stop": "\n"
  });
  oHttp.send(sBody);
  btnSend.disabled = false;
  txtMsg.disabled = false;
  selLang.disabled = false;
}
function ChangeLang(oSel) {
  var sLang = oSel.value;
  var sMsg = txtMsg.value;
  if (sMsg == "") {
    return;
  }
  txtOutput.value = "Thinking...";
  var oHttp = new XMLHttpRequest();
  oHttp.open("POST", "https://api.openai.com/v1/engines/davinci/completions");
  oHttp.setRequestHeader("Accept", "application/json");
  oHttp.setRequestHeader("Content-Type", "application/json");
  oHttp.setRequestHeader("Authorization", "Bearer " + api);
  oHttp.onreadystatechange = function() {
    if (oHttp.readyState == 4 && oHttp.status == 200) {
      var oResult = JSON.parse(oHttp.responseText);
      txtOutput.value = oResult.choices[0].text;
    }
  }
  var sBody = JSON.stringify({
    "prompt": sMsg + "\nAI:",
    "max_tokens": 150,
    "temperature": 0.9,
    "top_p": 1,
    "n": 1,
    "stream": false,
    "logprobs": null,
    "stop": "\n"
  });
  oHttp.send(sBody);
}