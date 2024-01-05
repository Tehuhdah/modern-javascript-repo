// 18:30

// Storing objects in arrays

// 'blogs' is an array of objects, where each object represents a blog post.
// Each blog post object has a 'title' property, which is the title of the blog post,
// and a 'likes' property, which is the number of likes the blog post has received.
// const blogs = [
//   { title: "Why Mac & Cheese is Good", likes: 30 },
//   { title: "10 reasons to go gym.", likes: 25 },
// ];

// console.log(blogs);

let user = {
  name: "Jhordan",
  age: 20,
  email: "jtejada2@academic.rrc.ca",
  location: "Winnipeg",
  blogs: [
    { title: "Why Mac & Cheese is Good", likes: 30 },
    { title: "10 reasons to go gym.", likes: 25 },
  ],
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
        console.log(blog.title, blog.likes);
      })
    );
  },
};

user.login();
user.logout();
user.logBlogs();
