const AuthorizedUsers = ["Eli", "David", "Matt"];

function isValidUser(name: string): boolean {
  if (AuthorizedUsers.includes(name)) {
    return true;
  } else {
    return false;
  }
}

export default isValidUser;
