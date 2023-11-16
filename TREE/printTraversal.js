function printPre() {
  strArr = "";
  fBST.preOrder(fBST.root);
  alert(strArr);
  strArr = "";
}
function printIn() {
  strArr = "";
  fBST.inOrder(fBST.root);
  alert(strArr);
  strArr = "";
}

function printPost() {
  strArr = "";
  fBST.postOrder(fBST.root);
  alert(strArr);
  strArr = "";
}
