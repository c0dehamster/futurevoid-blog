import type { Models } from "../../node_modules/appwrite/types/models"
import type { DBDocument } from "./types/DBdocument"
import type { Post } from "./types/post"

import { getImageURL } from "./posts"

export const parseDocumentAsPost = async (
    document: Models.Document
): Promise<Post> => {
    let id = document.$id

    // Type assertion because Appwrite does not
    // provide type safety for fetched documents

    let postAsDocument = document as unknown as DBDocument

    let imageUrl = postAsDocument.imageId
        ? (await getImageURL(postAsDocument.imageId)).href
        : null

    return {
        id,
        title: postAsDocument.title,
        imageUrl,
        bodyText: postAsDocument.bodyText,
        tags: postAsDocument.tags,
    }
}
