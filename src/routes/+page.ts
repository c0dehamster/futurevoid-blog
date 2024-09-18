import { getImage, getPosts } from "$lib/posts"
import type { DBDocument } from "$lib/types/DBdocument"
import type { Post } from "$lib/types/post"

export const load = async () => {
    let response = await getPosts()

    let posts: Array<Post> = []

    response.documents.forEach(async (document) => {
        let id = document.$id

        // Type assertion because Appwrite does not
        // provide type safety

        let postAsDocument = document as unknown as DBDocument

        let imageUrl = postAsDocument.imageId
            ? (await getImage(postAsDocument.imageId)).href
            : null

        let post: Post = {
            id,
            title: postAsDocument.title,
            imageUrl: imageUrl,
            bodyText: postAsDocument.bodyText,
            tags: postAsDocument.tags,
        }

        posts.push(post)
    })

    return { posts }
}
