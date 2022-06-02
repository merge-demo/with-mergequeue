const AllowedNames = ["Heisenberg", "Walter"]

function sayMyName(name: string): void {
  if (AllowedNames.includes(name)) {
    return "You're right 👍";
  } else {
    return "You're wrong 👎";
  }
}

export default sayMyName;
