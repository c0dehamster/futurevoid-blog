import { getPosts } from "$lib/posts"
import { testTagsList } from "$lib/test-data/testTagsList"

export const load = async () => {
    let posts = await getPosts()

    let tags = testTagsList

    return {
        posts,
        tags,
    }
}
