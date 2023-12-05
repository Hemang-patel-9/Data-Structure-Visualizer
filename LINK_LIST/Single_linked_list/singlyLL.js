//needed variables
let sl = null;
let listCount = Number.parseInt(0);
let row_num = 0;
let arr = [];
class LinkedList {
  constructor(n) {
    this.head = null;
    this.data = n;
    this.link = null;
  }

  insert(val) {
    let node = new LinkedList(val);
    if (this.head === null) {
      this.head = node;
      arr.push(val);
      console.log(arr);
      return;
    }
    let ptr = this.head;
    while (ptr.link != null) {
      if (val > ptr.data && val < ptr.link.data) {
        node.link = ptr.link;
        ptr.link = node;
        arr.push(val);
        console.log(arr);
        return;
      }
      ptr = ptr.link;
    }
    ptr.link = node;
    arr.push(val);
    console.log(arr);
  }

  delete(val) {
    if (this.head === null) {
      alert("can't delete from empty linkedlist");
      return;
    }

    let ptr = this.head,
      pred = this.head;

    while (ptr.link !== null) {
      if (ptr.data == val) {
        pred.link = ptr.link;
        arr.splice(arr.indexOf(val), 1);
        console.log(arr);
        return;
      }
      pred = ptr;
      ptr = ptr.link;
    }
    alert("Node not found");
  }

  search(n) {
      let ptr = this.head;

      while (ptr !== null) {
          if (ptr.data == n) {
            alert("found in list");
            break;
          }
      }
      alert("Node not found in list!");
  }

  printLL() {
    let ptr = this.head,
      str = "";

    while (ptr !== null) {
      str += ptr.data + " ";
      ptr = ptr.link;
    }

    console.log(str);
  }
}
sl = new LinkedList();
//clicking event
document.getElementById("btnSearch").addEventListener("click", () => {
  let val = document.getElementById("searchInput").value;
  sl.search(val);
  val="";
});
document.getElementById("btnInsert").addEventListener("click", () => {
  let val = document.getElementById("insertInput");
  if (val != "" && val != NaN) {
    sl.insert(val.value);
  }
  val.value="";
  displayNodes();
});
document.getElementById("btnDelete").addEventListener("click", () => {
  let val = document.getElementById("deleteInput");
  sl.delete(val.value);
  displayNodes();
  val.value="";
});



function displayNodes() {
  let parent = document.getElementById("linked-list-container");
  parent.innerHTML = "";
  listCount = 0;
  row_num = 0;
  for (let a = 0; a < arr.length; a++) {
    listCount++;
    if (listCount == 1 || listCount == 9) {
      row_num++;
      parent.innerHTML += `<div class="row" id="row${row_num}"></div>`;
    }
    if (a == arr.length - 1) {
      if (row_num % 2 == 1) {
        let old_row = document.getElementById(`row${row_num}`);
        old_row.innerHTML += `<div class="item"><div class="value">${arr[a]}</div><div class="null"><div></div></div><div>`;
      } else {
        let old_row = document.getElementById(`row${row_num}`);
        old_row.innerHTML += `<div class="item"><div class="null"><div></div></div><div class="value">${arr[a]}</div></div>`;
      }
    } else if (listCount > 0 && listCount <= 7) {
      let old_row = document.getElementById(`row${row_num}`);
      old_row.innerHTML += `<div class="item" id="item${a}"><div class="value">${arr[a]}</div><div class="link-horizontal"><div></div><div></div></div></div>`;
    } else if (listCount == 8) {
      let old_row = document.getElementById(`row${row_num}`);
      old_row.innerHTML += `<div class="item" id="item${a}"><div class="value">${arr[a]}</div><div class="link-vertical"><div></div><div></div></div><div>`;
    } else if (listCount > 8 && listCount <= 15) {
      let old_row = document.getElementById(`row${row_num}`);
      old_row.innerHTML += `<div class="item" id="item${a}"><div class="link-horizontal" style="rotate: 180deg;"><div></div><div></div></div><div class="value">${arr[a]}</div><div>`;
    } else if (listCount == 16) {
      let old_row = document.getElementById(`row${row_num}`);
      old_row.innerHTML += `<div class="item" id="item${a}"><div class="link-vertical"><div></div><div></div></div><div class="value">${arr[a]}</div></div>`;
      listCount = 0;
    }
  }
}
