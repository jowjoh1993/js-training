const task3Element = document.getElementById('task-3');

function display() {
   alert("whee");
}

function display2(text) {
   alert(text);
}

display();
display("haha");

task3Element.addEventListener('click', display);

function concat(text1, text2, text3) {
   return text1 + text2 + text3;
}

alert(concat("ba", "ba", "booey"));

