//needed variables
let sl = null;
let listCount = Number.parseInt(0);
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
      return;
    }
    let ptr = this.head;
    while (ptr.link != null) {
      if (val > ptr.data && val < ptr.link.data) {
        node.link = ptr.link;
        ptr.link = node;
        return;
      }
      ptr = ptr.link;
    }
    ptr.link = node;
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
        return;
      }
      pred = ptr;
      ptr = ptr.link;
    }
    alert("Node not found");
  }

  // search(n) {
  //     let ptr = this.head;

  //     while (ptr !== null) {
  //         if (ptr.data == n) {

  //         }
  //     }
  // }

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
let row_num=0;

//clicking event
document.getElementById("btnSearch").addEventListener("click", () => {
  let val = document.getElementById("searchInput").value;
  alert("click search button -> " + val);
});
document.getElementById("btnInsert").addEventListener("click", () => {
  let val = document.getElementById("insertInput").value;
  let parent = document.getElementById("linked-list-container");
  sl.insert(val);
  listCount++;
  if(listCount==1 || listCount ==9)
  {
    row_num+=Number.parseInt(1);
    parent.innerHTML+=`<div class="row" id="row${row_num}"></div>`;
  }
  if(listCount>0 && listCount<=7)
  {
    let old_row=document.getElementById(`row${row_num}`);
    old_row.innerHTML += `<div class="item"><div class="value">${val}</div><div class="link-horizontal"><div></div><div></div></div></div>`;
  }
  else if (listCount == 8) {
    let old_row=document.getElementById(`row${row_num}`);
    old_row.innerHTML += `<div class="item"><div class="value">${val}</div><div class="link-vertical"><div></div><div></div></div><div>`;
  } else if (listCount > 8 && listCount <= 15) {
    let old_row=document.getElementById(`row${row_num}`);
    old_row.innerHTML += `<div class="item"><div class="link-horizontal" style="rotate: 180deg;"><div></div><div></div></div><div class="value">${val}</div><div>`;
  } else if (listCount == 16) {
    let old_row=document.getElementById(`row${row_num}`);
    old_row.innerHTML += `<div class="item"><div class="link-vertical"><div></div><div></div></div><div class="value">${val}</div></div>`;
    listCount = 0;
  }
});
document.getElementById("btnDelete").addEventListener("click", () => {
  let val = document.getElementById("deleteInput").value;
  alert("click delete button -->" + val);
});

///information for displaying node
/**
 * 1)left right
 * 		1)[x|->]default right indicating
 * 		2)[<-|x] for left indicate rotate 180deg to class (.link-horizontal) and put .value division at bottom
 * 		///this is my division 
 * 				<div class="item">
						<div class="value">2</div>
						<div class="link-horizontal">
							<div></div>
							<div></div>
						</div>
				</div>
 * 		1)[x|->]default down right side indicating
 * 		2)[<-|x] for down left side indicate just change the division place
 * 		///this is my division 
 * 				<div class="item">
						<div class="value">2</div>
						<div class="link-vertical">
							<div></div>
							<div></div>
						</div>
				</div>
 * 
 */
