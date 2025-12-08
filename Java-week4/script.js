let userName = "";
let todo = [];

// Main function to process commands

function getReply(command) {
  // Save the name
  if (command.startsWith("Hello my name is ")) {
    userName = command.replace("Hello my name is ", "").trim();
    return `Nice to meet you ${userName}`;
  }
  if (command === "What is my name?") {
    if (userName === "") {
      return "I don't know your name yet.";
    } else {
      return `Your name is ${userName}`;
    }
  }

  // Add todo
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    let item = command.replace("Add ", "").replace(" to my todo", "").trim();
    todo.push(item);
    return `${item} added to your todo`;
  }
  // Remove todo
  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    let item = command
      .replace("Remove ", "")
      .replace(" from my todo", "")
      .trim();
    let index = todo.indexOf(item);
    if (index > -1) {
      todo.splice(index, 1);
      return `Removed ${item} from your todo`;
    } else {
      return `${item} is not in your todo`;
    }
  }
  // List todo
  if (command === "What is on my todo?") {
    if (todo.length === 0) {
      return "Your todo is empty.";
    } else {
      return `You have ${todo.length} todos: ${todo.join(", ")}`;
    }
  }
  // date
  if (command === "What day is it today?") {
    let today = new Date();
    let day = today.getDate();
    let month = today.toLocaleDateString("en-US", { month: "long" });
    let year = today.getFullYear();
    return `${day}. of ${month} ${year}`;
  }
  // Math
  if (command.startsWith("What is ")) {
    let parts = command.replace("What is ", "").trim().split(" ");
    let num1 = parseFloat(parts[0]);
    let operator = parts[1];
    let num2 = parseFloat(parts[2]);
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else {
      return "I can only do +, -, *, and / operations.";
    }
  }

  //set Timer

  if (command.startsWith("Set a timer for ")) {
    let parts = command.replace("Set a timer for ", "").trim().split(" ");
    let time = parseInt(parts[0]);
    let unit = parts[1];
    let milliseconds = 0;
    if (unit === "seconds") {
      milliseconds = time * 1000;
    } else if (unit === "minutes") {
      milliseconds = time * 60 * 1000;
    } else {
      return "I can only set timers in seconds or minutes.";
    }
    setTimeout(() => {
      console.log(`Timer done: ${time} ${unit} are up!`);
    }, milliseconds);
    return `Timer set for ${time} ${unit}`;
  }

  //add more commands as needed
  // Tell a joke
  if (command === "Tell me a joke") {
    return "Why did the computer show up at work late? It had a hard drive.";
  }
  return "I'm sorry, I don't understand that command.";
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("Set a timer for 1 minute"));
console.log(getReply("Tell me a joke"));
