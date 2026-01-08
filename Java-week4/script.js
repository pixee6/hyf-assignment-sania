let userName = "";
let todo = [];

// constants
const NAME_PREFIX = "Hello my name is ";
const ADD_PREFIX = "Add ";
const ADD_TODO_SUFFIX = " to my todo";
const REMOVE_PREFIX = "Remove ";
const REMOVE_TODO_SUFFIX = " from my todo";
const TIMER_PREFIX = "Set a timer for ";
const MATH_PREFIX = "What is ";

function getReply(command) {
  // Save the name
  if (command.startsWith(NAME_PREFIX)) {
    userName = command.replace(NAME_PREFIX, "").trim();
    return `Nice to meet you ${userName}`;
  }

  if (command === "What is my name?") {
    if (!userName) {
      return "I don't know your name yet.";
    } else {
      return `Your name is ${userName}`;
    }
  }

  // Add todo
  if (command.startsWith(ADD_PREFIX) && command.endsWith(ADD_TODO_SUFFIX)) {
    const item = command
      .replace(ADD_PREFIX, "")
      .replace(ADD_TODO_SUFFIX, "")
      .trim();

    todo.push(item);
    return `${item} added to your todo`;
  }

  // Remove todo
  if (command.startsWith(REMOVE_PREFIX) && command.endsWith(REMOVE_TODO_SUFFIX)) {
    const item = command
      .replace(REMOVE_PREFIX, "")
      .replace(REMOVE_TODO_SUFFIX, "")
      .trim();

    const index = todo.indexOf(item);
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

  // Date
  if (command === "What day is it today?") {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleDateString("en-US", { month: "long" });
    const year = today.getFullYear();

    return `${day}. of ${month} ${year}`;
  }

  // Math
  if (command.startsWith(MATH_PREFIX)) {
    const parts = command.replace(MATH_PREFIX, "").trim().split(" ");

    if (parts.length !== 3) {
      return "Invalid math format. Use: What is 3 + 3";
    }

    const num1 = parseFloat(parts[0]);
    const operator = parts[1];
    const num2 = parseFloat(parts[2]);

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

  // Timer
  if (command.startsWith(TIMER_PREFIX)) {
    const parts = command.replace(TIMER_PREFIX, "").trim().split(" ");

    if (parts.length !== 2) {
      return "Invalid timer format. Use: Set a timer for 5 minutes";
    }

    const time = parseInt(parts[0]);
    const unit = parts[1];

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

  // Extra command
  if (command === "Tell me a joke") {
    return "Why did the computer show up at work late? It had a hard drive.";
  }

  return "I'm sorry, I don't understand that command.";
}
/* ======================
   TESTING COMMANDS
   ====================== */

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));

console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));

console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));

console.log(getReply("What day is it today?"));

console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 10 - 4"));
console.log(getReply("What is 4 * 12"));

console.log(getReply("Set a timer for 1 minute"));

console.log(getReply("Tell me a joke"));












