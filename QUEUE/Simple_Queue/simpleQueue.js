let q1 = null;
let isEqual = false;
class Queue {
  constructor(s) {
    this.queue = [];
    this.size = s;
    this.frontIndex = Number.parseInt(0);
    this.rearIndex = Number.parseInt(0);
    popup(true, "created new queue");
  }
  enqueue(data) {
    if (this.size == this.rearIndex) {
      popup(false, "Queue Overflow");
    } else {
      this.rearIndex++;
      if (this.frontIndex == 0) {
        this.frontIndex = 1;
      }
      setRear(this.rearIndex, data);
      this.queue.push(data);
    }
  }
  dequeue() {
    if (
      this.frontIndex == this.rearIndex + 1 ||
      (this.frontIndex == this.rearIndex && this.frontIndex == 0)) {
      popup(false, "Queue Underflow");
      return;
    }
    if (this.frontIndex == this.rearIndex) {
      document.getElementById(`item${this.frontIndex + 1}`).innerHTML = "";
      this.frontIndex = 0;
      this.rearIndex = 0;
      this.queue.pop();
      return;
    }
    this.frontIndex++;
    this.queue.shift();
    if (this.frontIndex != this.rearIndex + 1) {
      setFront(this.frontIndex, this.queue[0]);
    }
  }
}
//onload code
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
///clicking events
document.getElementById("btnSize").addEventListener("click", () => {
  let val = document.getElementById("inputSize").value;
  if (val >= 5 && val <= 40) {
    if (q1 === null) {
      displayQueue(40, "none");
      q1 = new Queue(val);
      displayQueue(val, "flex");
    } else {
      //code for confirmation
      if (confirm("Are you sure to make new queue ?")) {
        q1 = null;
        for (let a = 1; a <= 40; a++) {
          document.getElementById(`item${a}`).innerHTML = "";
        }
        document.getElementById("btnSize").click();
      }
    }
  }
  else {
    popup(false, "Please enter size between 5 and 40.")
  }
});

document.getElementById("btnEnq").addEventListener("click", () => {
  if (q1 === null) {
    popup(false, "Please enter size first");
  }
  else {
    let val = document.getElementById("inputEnq").value;
    if (val != "" && val != NaN) {
      q1.enqueue(val);
    }
    else {
      popup(false, "Please enter some value to insert.");
    }
  }
  document.getElementById("inputEnq").value = "";
  document.getElementById("inputEnq").focus();
});

document.getElementById("btnDeq").addEventListener("click", () => {
  if (q1 === null) {
    popup(false, "Can't dequeue before enqueue.");
    return
  }
  if (q1.frontIndex != 0) {
    document.getElementById(`item${q1.frontIndex}`).innerHTML = "";
  }
  q1.dequeue();
});

function displayQueue(id, value) {
  for (let v = 1; v <= id; v++) {
    document.getElementById(`item${v}`).style.display = value;
  }
}
function setRear(id, val) {
  if (q1.frontIndex != q1.rearIndex && q1.frontIndex != 0) {
    document.getElementById("rear").remove();
  }
  let parent = document.getElementById(`item${id}`);
  if (q1.frontIndex === q1.rearIndex) {
    parent.innerHTML = `${val}<div class="both" id="both"><div class="innerboth" id="front">front</div><div class="innerboth" id="rear">rear</div></div>`;
    isEqual = true;
  } else {
    if (isEqual == true) {
      let p = document.getElementById(`item${q1.frontIndex}`);
      p.innerHTML = `${q1.queue[0]}<div class='position' id='front'>front</div>`;
    }
    document.getElementById("front").setAttribute("class", "position");
    parent.innerHTML = `${val}<div class='position' id='rear'>rear</div>`;
  }
}
function setFront(id, val) {
  val = Number.parseInt(val);
  let parent = document.getElementById(`item${id}`);
  if (q1.frontIndex === q1.rearIndex) {
    parent.innerHTML = `${val}<div class="both" id="both"><div class="innerboth" id="front">front</div><div class="innerboth" id="rear">rear</div></div>`;
  } else {
    parent.innerHTML = `${val}<div class='position' id='front'>front</div>`;
  }
}
