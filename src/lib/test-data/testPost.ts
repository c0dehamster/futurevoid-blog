import type { Post } from "$lib/types/post"

import elster from "$lib/test-data/Elster.png"

let testPost: Post = {
    id: "testPost1",
    title: "The first post on my blog",
    bodyText:
        "It is hard-coded into the test data inside the lib folder of the blog itself. If you see it, then either the blog is not finished yet, or something went terribly wrong.",
    tags: ["test", "dummy", "to be removed"],
}

let testPostImage: Post = {
    id: "testPost2",
    title: "This post has an image in it",
    image: elster,
    bodyText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore rerum quis dolorem voluptate nobis laboriosam quas laudantium dolore, quod quisquam dolorum ab corporis at similique adipisci reiciendis, nulla minus veniam est vel eius consequuntur deleniti!",
    tags: ["test", "dummy", "to be removed", "image"],
}

export const testPosts = [testPost, testPostImage]
