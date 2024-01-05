// 13:00

// This keyword
// In a method, 'this' refres to the owner object.
// Arrow Functions do not have their own 'this', they do not change and continue
// to refer to the window object.

let user = {
  name: "Jhordan",
  age: 20,
  email: "jtejada2@academic.rrc.ca",
  location: "Winnipeg",
  blogs: ["Why Mac & Cheese is Good", "10 reasons to go gym."],
  // Created a login method for our user object, that logs the users name,
  // and that they are logged in.
  login() {
    console.log(this.name, "has logged in.");
  },
  // Created a logout method for our user object, that logs the users name,
  // and that they are logged out.
  logout() {
    console.log(this.name, "has logged out.");
  },
  // Created a log blogs method for our user object, that logs all the users blogs.
  logBlogs() {
    console.log("This user has written the following blogs:");
    console.log(
      // Using a callback function to log a blog and it's index for each blog in the blogs array.
      this.blogs.forEach((blog, index) => {
        console.log(blog, index);
      })
    );
  },
};

user.login();
user.logout();
user.logBlogs();
