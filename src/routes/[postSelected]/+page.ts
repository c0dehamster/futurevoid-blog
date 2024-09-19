import { parseDocumentAsPost } from "$lib/parseDocumentAsPost.js"
import { getPostById } from "$lib/posts.js"

export const load = async ({ params }) => {
    let response = await getPostById(params.postSelected)

    let post = await parseDocumentAsPost(response)

    return { post }
}
