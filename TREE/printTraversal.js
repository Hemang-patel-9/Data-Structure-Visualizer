function printPre() {
  strArr = "";
  if (fBST === null) {
    popup(false, "PreOrder Traversal can be accessed after creating BST.");
  }
  else {
    fBST.preOrder(fBST.root);
    popup(true, "PreOrder Traversal - " + strArr);
  }
  strArr = "";
}
function printIn() {
  strArr = "";
  if (fBST === null) {
    popup(false, "InOrder Traversal can be accessed after creating BST.");
  } else {
    fBST.inOrder(fBST.root);
    popup(true, "InOrder Traversal - " + strArr);
  }
  strArr = "";
}

function printPost() {
  strArr = "";
  if (fBST === null) {
    popup(false, "PostOrder Traversal can be accessed after creating BST.");
  } else {
    fBST.postOrder(fBST.root);
    popup(true, "PostOrder Traversal - " + strArr);
  }
  strArr = "";
}
