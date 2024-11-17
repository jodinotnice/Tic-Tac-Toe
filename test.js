// const me = {
//   name: "Jordan",
//   talk() {
//     return console.log(`Hello i am ${this.name}`);
//   },
// };

// const ben = {
//   name: "Ben",
//   talk() {
//     return console.log(`Hello i am ${this.name}`);
//   },
// };

// me.talk();
// ben.talk();

//Factory Function

function personFactory(name) {
  return {
    talk() {
      console.log(`Hello I am ${name}`);
    },
  };
}

const me = personFactory("Sina");

me.talk();

const ben = personFactory("Ben");
ben.talk();

function createElement(type, text, color) {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);
  return {
    el,
    setText(text) {
      el.innerText = text;
    },
    setColor(color) {
      el.style.color = color;
    },
  };
}

const h1 = createElement("h1", "Hey guys", "red");

// Closure

function elementCreator(element) {
  let age = 29;

  function func2() {
    return () => {
      return document.createElement(element);
    };
  }
}

const createDiv = elementCreator("div");

// Another closure example

function human(n) {
  const name = n;
  function sayHi() {
    console.log(`Hi I am ${name}`);
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling good!`);
  }

  return {
    sayHi,
    sayHowYouFeel,
  };
}

const jordan = human("Jordan");
jordan.sayHi();

document.getElementById("size-12").onclick = function () {
  document.body.style.fontSize = "12px";
};

document.getElementById("size-14").onclick = function () {
  document.body.style.fontSize = "14px";
};
document.getElementById("size-16").onclick = function () {
  document.body.style.fontSize = "16px";
};

function clickHandler(size) {
  document.body.style.fontSize = `${size}`;
}
