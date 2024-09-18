import { parseDocumentAsPost } from "$lib/parseDocumentAsPost"
import { getImage, getPosts } from "$lib/posts"
import type { Post } from "$lib/types/post"

export const load = async () => {
    let response = await getPosts()

    let posts: Array<Post> = []

    // Converting response to posts before loading the page
    // Otherwise, it loads before imageUrl promise resolves

    response.documents.forEach(async (document) => {
        let post = await parseDocumentAsPost(document)

        posts.push(post)
    })

    return { posts }
}
