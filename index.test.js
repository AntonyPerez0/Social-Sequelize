const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  // Write your tests here

  test("should create a User", async () => {
    const user = await User.create({
      username: "testuser",
      email: "test@example.com",
    });
    expect(user.username).toBe("testuser");
    expect(user.email).toBe("test@example.com");
  });

  test("should create a Profile and associate with User", async () => {
    const user = await User.create({
      username: "profileuser",
      email: "profile@example.com",
    });
    const profile = await Profile.create({
      bio: "Hello World",
      profilePicture: "pic.jpg",
      birthday: "1990-01-01",
    });
    await user.setProfile(profile);
    const userProfile = await user.getProfile();
    expect(userProfile.bio).toBe("Hello World");
  });

  test("should create a Post associated with User", async () => {
    const user = await User.create({
      username: "postuser",
      email: "post@example.com",
    });
    const post = await Post.create({
      title: "Test Post",
      body: "This is a test post",
      createdAt: "2023-01-01",
    });
    await user.addPost(post);
    const userPosts = await user.getPosts();
    expect(userPosts.length).toBe(1);
    expect(userPosts[0].title).toBe("Test Post");
  });

  test("should associate a Like with User", async () => {
    const user = await User.create({
      username: "likeuser",
      email: "like@example.com",
    });
    const like = await Like.create({
      reactionType: "Like",
      createdAt: "2023-01-02",
    });
    await user.addLike(like);
    const userLikes = await user.getLikes();
    expect(userLikes.length).toBe(1);
    expect(userLikes[0].reactionType).toBe("Like");
  });
});
