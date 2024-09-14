import type { Post } from "$lib/types/post"

export let testPost: Post = {
    id: "666",
    title: "The first post on my blog",
    bodyText:
        "It is hard-coded into the test data inside the lib folder of the blog itself. If you see it, the either the blog is not finished yet, or something went terribly wrong.",
    tags: ["test", "dummy", "to be removed"],
}
