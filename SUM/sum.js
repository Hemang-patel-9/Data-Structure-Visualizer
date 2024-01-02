let choice1 = "Infix";
let choice2 = "Infix";
let expression = "";
let tableBodyString = ""

class InfixToPrefix {
  infixToPrefix(str) {
    let s = [], step = [], rank = 0, ch;
    let newStr = "";
    s.push("(");
    let i = Number.parseInt(0);
    str+=")";

    while (i < str.length) {
      while (
        this.stackPrecedenceFunction(s[s.length - 1]) > this.inputPrecedenceFunction(str.charAt(i))
      ) {
        ch = s.pop();
        if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '^' || ch == '$') {
          rank--;
        }
        else {
          rank++;
        }
        newStr += ch;
      }
      if (
        this.stackPrecedenceFunction(s[s.length - 1]) != this.inputPrecedenceFunction(str.charAt(i))
      ) {
        s.push(str.charAt(i));
      } else {
        s.pop();
      }

      step[0] = str.charAt(i);
      step[1] = s;
      step[2] = newStr;
      step[3] = rank;

      DrawTable(step);
      i++;
    }

    // let finalStr = newStr;
    // return finalStr.reverse().toString();
  }
  stackPrecedenceFunction(s) {
    switch (s) {
      case "+":
        return 2;
      case "-":
        return 2;
      case "*":
        return 4;
      case "/":
        return 4;
      case "^":
        return 5;
      case "$":
        return 5;
      case "(":
        return 0;
      default:
        return 8;
    }
  }
  inputPrecedenceFunction(s) {
    switch (s) {
      case "+":
        return 1;
      case "-":
        return 1;
      case "*":
        return 3;
      case "/":
        return 3;
      case "^":
        return 6;
      case "$":
        return 6;
      case "(":
        return 9;
      case ")":
        return 0;
      default:
        return 7;
    }
  }
}

document.getElementById("inputBox").addEventListener('change', (e) => {
  expression = e.target.value;
});
function filter() {
  const arr = ['+', '-', '*', '/', '$', '^', '(', ')', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  expression.trim();
  expression.toLowerCase();
  // for (let a = 0; a < expression.length; a++) {
  //   if (arr.includes(expression.charAt(a)) === false) {
  //     alert("Expression Invalid\nPlease Enter valid.");
  //     return false;
  //   }
  // }
  return true;
}
function selection() {
  let dropdownList1 = document.getElementById("drpd1");
  dropdownList1.onchange = () => {
    let selectedOption = dropdownList1.options[dropdownList1.selectedIndex];
    choice1 = selectedOption.value;
  };
  let dropdownList2 = document.getElementById("drpd2");
  dropdownList2.onchange = () => {
    let selectedOption = dropdownList2.options[dropdownList2.selectedIndex];
    choice2 = selectedOption.value;
  };
}
function Convert() {
  if (filter() === false) {
    document.getElementById('inputBox').value = "";
    return;
  }

  console.log(choice1 + " " + choice2);
  // if (choice1 == "Infix" && choice2 == "Prefix") {
    if(expression!=null){

      alert("called");
      let table = document.getElementById("table");
      let itof = new InfixToPrefix();
      table.style.display = "grid";
      table.innerHTML =
      `<thead><tr><th>Input<br/>Symbol</th><th>Stack</th><th>Reverse Polish Expression</th><th>Rank</th></tr></thead><tbody id="tbody">${tableBodyString}</tbody>`;
      tableBodyString = "";
      itof.infixToPrefix(expression);
    }

  // }
}

function DrawTable(a) {
  console.log(a);
  let tbody = document.getElementById("tbody");

  tbody.innerHTML += `<tr>
                      <td>${a[0]}</td>
                      <td>${a[1].join("")}</td>
                      <td>${a[2]}</td>
                      <td>${a[3]}</td>
                    </tr>`
  tableBodyString += `<tr>
                      <td>${a[0]}</td>
                      <td>${a[1].join("")}</td>
                      <td>${a[2]}</td>
                      <td>${a[3]}</td>
                    </tr>`
  console.log(tableBodyString);
}

//infix->post
//infix->pre
//pre->infix
//pre->post   !
//post->infix
//post->prefix

// import java.util.*;

// public class InfixToPrefix {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);

//         String s, t, r, fstr, newStr, inputstr;
//         s = sc.nextLine();
//         t = s.replace('(', '#');
//         r = t.replace(')', '(');
//         fstr = r.replace('#', ')');

//         StringBuffer str = new StringBuffer(fstr);

//         inputstr = str.reverse().toString();

//         InfixToPrefix itp = new InfixToPrefix();
//         newStr = itp.infixToPrefix(inputstr);

//         System.out.println(newStr);
//     }

//     public String infixToPrefix(String str) {
//         Stack<Character> s = new Stack<>();
//         String newStr = "";

//         s.push('(');
//         s.push('(');

//         int i = 0;

//         while (i < str.length()) {
//             while (stackPrecedenceFunction(s.peek()) > inputPrecedenceFunction(str.charAt(i))) {
//                 newStr += s.pop();
//             }

//             if (stackPrecedenceFunction(s.peek()) != inputPrecedenceFunction(str.charAt(i))) {
//                 s.push(str.charAt(i));
//             } else {
//                 s.pop();
//             }
//             i++;
//         }

//         StringBuffer finalStr = new StringBuffer(newStr);
//         return finalStr.reverse().toString();
//     }

//     public static int inputPrecedenceFunction(char s) {
//         switch (s) {
//             case '+':
//                 return 1;
//             case '-':
//                 return 1;
//             case '*':
//                 return 3;
//             case '/':
//                 return 3;
//             case '^':
//                 return 6;
//             case '(':
//                 return 9;
//             case ')':
//                 return 0;
//             default:
//                 return 7;
//         }
//     }

//     public static int stackPrecedenceFunction(char s) {
//         switch (s) {
//             case '+':
//                 return 2;
//             case '-':
//                 return 2;
//             case '*':
//                 return 4;
//             case '/':
//                 return 4;
//             case '^':
//                 return 5;
//             case '(':
//                 return 0;
//             default:
//                 return 8;
//         }
//     }
// }
































































//java code infix to postfix
// import java.util.*;

// public class InfixToPostfix {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);

//         String s, newStr;
//         s = sc.nextLine();

//         InfixToPostfix itp = new InfixToPostfix();

//         newStr = itp.infixToPostfix(s);

//         System.out.println(newStr);
//     }

//     public String infixToPostfix(String str) {
//         Stack<Character> s = new Stack<>();
//         String newStr = "";

//         s.push('(');

//         int i = 0, rank = 0, top = 1;

//         while (i < str.length()) {
//             while (stackPrecedenceFunction(s.peek()) > inputPrecedenceFunction(str.charAt(i))) {
//                 newStr += s.pop();
//             }

//             if (stackPrecedenceFunction(s.peek()) != inputPrecedenceFunction(str.charAt(i))) {
//                 s.push(str.charAt(i));
//             } else {
//                 s.pop();
//             }
//             i++;
//         }

//         return newStr;
//     }

//     public static int inputPrecedenceFunction(char s) {

//         switch (s) {
//             case '+':
//                 return 1;
//             case '-':
//                 return 1;
//             case '*':
//                 return 3;
//             case '/':
//                 return 3;
//             case '^':
//                 return 6;
//             case '(':
//                 return 9;
//             case ')':
//                 return 0;
//             default:
//                 return 7;
//         }
//     }

//     public static int stackPrecedenceFunction(char s) {

//         switch (s) {
//             case '+':
//                 return 2;
//             case '-':
//                 return 2;
//             case '*':
//                 return 4;
//             case '/':
//                 return 4;
//             case '^':
//                 return 5;
//             case '(':
//                 return 0;
//             default:
//                 return 8;
//         }
//     }
// }