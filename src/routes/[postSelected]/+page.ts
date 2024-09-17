import { getPostById } from "$lib/posts.js"

export const load = async ({ params }) => {
    // HACK: Relies on the post's id and DocumentID being the same
    let post = await getPostById(params.postSelected)
    return { post }
}
