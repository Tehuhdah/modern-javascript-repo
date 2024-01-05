// 9:10

// Object Methods
// Methods are functions that are defined on an object.
let user = {
  name: "Jhordan",
  age: 20,
  email: "jtejada2@academic.rrc.ca",
  location: "Winnipeg",
  blogs: ["Why Mac & Cheese is Good", "10 reasons to go gym."],
  // Created a login method for our user object, that logs the users name,
  // and that they are logged in.
  login: () => console.log(user.name, "has logged in."),
  // Created a logout method for our user object, that logs the users name,
  // and that they are logged out.
  logout: () => console.log(user.name, "has logged out."),
  // Created a log blogs method for our user object, that logs all the users blogs.
  logBlogs: () => console.log(user.blogs),
};

user.login();
user.logout();
user.logBlogs();
