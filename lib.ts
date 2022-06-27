const AuthorizedUsers = ["Eli", "David"];

function isValidUser(name: string): boolean {
  if (AuthorizedUsers.includes(name)) {
    return true;
  } else {
    return false;
  }
}

export default isValidUser;
