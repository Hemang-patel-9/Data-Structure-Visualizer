let deq = null;
let isEqual = false;
let togg = 0;

class DEQueue {
  constructor(s) {
    this.dequeue = [];
    this.size = s;
    this.frontIndex = Number.parseInt(-1);
    this.rearIndex = Number.parseInt(-1);
    alert("created new queue");
  }

  insertFront(data) {
    if (this.frontIndex == 0) {
      alert("Can't insert at first");
      return;
    }
    if (this.frontIndex == -1) {
      alert("Empty Queue");
      return;
    }
    this.dequeue.unshift(data);
    this.frontIndex--;
    setInsertFirst(this.frontIndex + 1, data);
  }

  insertLast(data) {
    if (this.rearIndex == this.size - 1) {
      alert("Queue Overflow");
      return;
    }

    this.rearIndex++;
    if (this.frontIndex == -1) {
      this.frontIndex = 0;
    }
    this.dequeue.push(data);
    setInsertLast(this.rearIndex + 1, data);
  }

  deleteFront() {
    if (this.frontIndex == this.rearIndex + 1||this.frontIndex==-1) {
      alert("Queue Underflow");
      return;
    }
    if(this.frontIndex==this.rearIndex){
      document.getElementById(`item${this.frontIndex+1}`).innerHTML="";
      document.getElementById("front").remove();
      this.dequeue.shift();
      this.frontIndex=-1;
      this.rearIndex=-1;
      return;
    }  
    this.frontIndex++;
    this.dequeue.shift();
    setDeleteFirst(this.frontIndex + 1, this.dequeue[0]);
  }

  deleteLast() {
    if (this.rearIndex == -1) {
      alert("can't delete from empty queue");
      return;
    }
    this.dequeue.pop();
    this.rearIndex--;
    setDeleteLast(this.rearIndex + 1, this.dequeue[this.dequeue.length - 1]);
  }
}

for (let t = 1; t <= 40; t++) {
  if (t % 4 == 0) {
    document.getElementById(`item${t}`).style.backgroundColor = "yellow";
  } else if (t % 3 == 0) {
    document.getElementById(`item${t}`).style.backgroundColor = "lightblue";
  } else if (t % 2 == 0) {
    document.getElementById(`item${t}`).style.backgroundColor = "pink";
  } else if (t % 1 == 0) {
    document.getElementById(`item${t}`).style.backgroundColor = "lightgreen";
  }
}

document.getElementById("btnSize").addEventListener("click", () => {
  let val = Number.parseInt(document.getElementById("inputSize").value);
  if (val >= 5 && val <= 40) {
    if (deq === null) {
      displayQueue(40, "none");
      deq = new DEQueue(val);
      displayQueue(val, "flex");
    } else {
      if (confirm("Are sure to create new queue")) {
        deq = null;
        document.getElementById("btnSize").click();
      }
    }
  }
});

document.getElementById("btnEnq").addEventListener("click", () => {
  let val = document.getElementById("inputEnq").value;
  if (val != "") {
    if (togg == 1) {
      deq.insertFront(Number.parseInt(val));
    } else {
      deq.insertLast(Number.parseInt(val));
    }
  }
  document.getElementById("inputEnq").value="";
});

document.getElementById("btnDeq").addEventListener("click", () => {
  if (togg == 1) {
    deq.deleteFront();
  } else {
    deq.deleteLast();
  }
});

function displayQueue(id, value) {
  for (let v = 1; v <= id; v++) {
    document.getElementById(`item${v}`).style.display = value;
  }
}

document.getElementById("togg").addEventListener("click", () => {
  if (togg == 0) {
    togg = 1;
  } else {
    togg = 0;
  }
});

function setInsertLast(id, val) {
  if (id != 1) {
    document.getElementById("rear").remove();
  }
  let parent = document.getElementById(`item${id}`);
  if (deq.frontIndex == deq.rearIndex) {
    parent.innerHTML = `${val}<div class="both" id="both"><div class="innerboth" id="front">front</div><div class="innerboth" id="rear">rear</div></div>`;
    isEqual = true;
  } else {
    if (isEqual == true) {
      document.getElementById(
        `item${deq.frontIndex + 1}`
      ).innerHTML = `${deq.dequeue[0]}<div class='position' id='front'>front</div>`;
      isEqual = false;
    }
    parent.innerHTML = `${val}<div class='position' id='rear'>rear</div>`;
  }
}

function setInsertFirst(id, val) {}

function setDeleteLast() {}

function setDeleteFirst(id, val) {
  document.getElementById("front").remove();
  let parent = document.getElementById(`item${id}`);

  document.getElementById(`item${id - 1}`).innerHTML = "";
  if (deq.frontIndex === deq.rearIndex) {
    parent.innerHTML = `${val}<div class="both" id="both"><div class="innerboth" id="front">front</div><div class="innerboth" id="rear">rear</div></div>`;
  } else {
    parent.innerHTML = `${val}<div class='position' id='front'>front</div>`;
  }
}
// function printQ() {
//   console.log(deq.dequeue);
//   console.log("front " + deq.frontIndex + "\nrear " + deq.rearIndex);
// }
