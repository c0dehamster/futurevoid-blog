import { getPosts } from "$lib/posts"

export const load = async () => {
    let posts = await getPosts()

    return {
        posts,
    }
}
