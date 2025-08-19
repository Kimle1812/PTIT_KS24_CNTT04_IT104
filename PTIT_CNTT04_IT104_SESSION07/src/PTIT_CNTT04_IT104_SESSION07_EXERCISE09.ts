// ===== Lớp Comment =====
class Comment1 {
    public id: number;
    public userId: number;
    public content: string;
    public replies: string[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: string) {
        this.replies.push(reply);
        console.log(`Phản hồi đã được thêm vào bình luận ${this.id}`);
    }
}

// ===== Lớp Post =====
class Post {
    public id: number;
    public likes: number[] = [];
    public comments: Comment1[] = [];
    public userId: number;
    public content: string;

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: number) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
            console.log(`Người dùng ${userId} đã thích bài ${this.id}`);
        }
    }

    addComment(comment: Comment1) {
        this.comments.push(comment);
        console.log(`Bình luận "${comment.content}" đã được thêm vào bài ${this.id}`);
    }
}

// ===== Lớp User =====
class User {
    public id: number;
    public posts: Post[] = [];
    public followers: User[] = [];

    constructor(id: number) {
        this.id = id;
    }

    createPost(content: string) {
        const newPost = new Post(Date.now(), this.id, content);
        this.posts.push(newPost);
        console.log(`Người dùng ${this.id} đã tạo bài: "${content}"`);
    }

    comment(postId: number, commentContent: string) {
        for (let followedUser of this.followers) {
            for (let post of followedUser.posts) {
                if (post.id === postId) {
                    const newComment = new Comment1(Date.now(), this.id, commentContent);
                    post.addComment(newComment);
                }
            }
        }
    }

    follow(user: User) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
            console.log(`Người dùng ${this.id} đã theo dõi người dùng ${user.id}`);
        }
    }

    likePost(postId: number) {
        for (let followedUser of this.followers) {
            for (let post of followedUser.posts) {
                if (post.id === postId) {
                    post.addLike(this.id);
                }
            }
        }
    }

    viewFeed() {
        console.log(`\n📜 Bảng tin của người dùng ${this.id}:`);
        for (let followedUser of this.followers) {
            for (let post of followedUser.posts) {
                console.log(`Bài ${post.id} từ người ${followedUser.id}: ${post.content}`);
            }
        }
    }
}

// ===== Demo chạy thử =====
const user6 = new User(1);
const user7 = new User(2);

user6.follow(user7);

user7.createPost("Xin chào mọi người!");
let postId = user7.posts[0].id;

user6.likePost(postId);
user6.comment(postId, "Hay quá!");

user6.viewFeed();
