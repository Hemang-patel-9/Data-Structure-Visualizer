let myId;
//input is contains only number or not?
function validNumber(param) {
  if (isChange == true) {
    let tmp = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = "";
    checkInput();
    document.getElementById("inputBox").value = tmp;
  }
  checkInput();
  let str = document.getElementById(param).value;
  let x = str.charCodeAt(str.length - 1);
  if (((x >= 58 && x <= 126) || (x >= 33 && x <= 47)) && x != 45) {
    let del = str.substring(str.length - 1, str.length + 1);
    document.getElementById(param).value = str.replace(del, "");
  }
}
//filtering the data;
function filterdata(str) {
  if (str == "") {
    alert("The Box is Empty!");
  }
  str = str.trim();
  let narr = str.split(" ");
  let arr = [];

  let a = 0;
  let b = 0;
  a = Number.parseInt(a);
  b = Number.parseInt(b);

  narr.map((val) => {
    if (val !== "") {
      arr.push(val);
    }
  });
  narr = [];
  let flag = 0;
  for (a = 0; a < arr.length; a++) {
    flag = 0;
    for (b = a - 1; b >= 0; b--) {
      if (arr[a] == arr[b]) {
        flag = 1;
        alert("duplicate can't allow");
      }
    }
    if (flag == 0) {
      narr.push(arr[a]);
    }
  }
  document.getElementById("inputBox").value = narr.join(" ");
  return narr;
}
function checkInput() {
  let str = document.getElementById("inputBox").value;

  if (str == "") {
    fBST = null;
    fHB = null;
  }
}
