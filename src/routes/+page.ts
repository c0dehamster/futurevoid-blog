import { testPosts } from "$lib/test-data/testPost"
import { testTagsList } from "$lib/test-data/testTagsList"

/* Dummy load () function to be replaced with the one from Appwrite */

export const load = () => {
    let posts = testPosts
    let tags = testTagsList

    return {
        posts,
        tags,
    }
}
