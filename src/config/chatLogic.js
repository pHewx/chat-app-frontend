export function getSender(userLogged, users) {
  return userLogged._id === users[0]._id ? users[1].name : users[0].name;
}