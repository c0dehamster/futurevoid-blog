import { ID, Query } from "appwrite"

import { databases, storage } from "./appwrite"
import type { Tag } from "./types/tag"

const POSTS_DATABASE_ID = "66e81c52003e4dc1f440"
const POSTS_COLLECTION_ID = "66e8247a000d6987b96d"
const IMAGES_BUCKET_ID = "66ea5c0500243328ff58"

export const getPosts = async () => {
    return await databases.listDocuments(
        POSTS_DATABASE_ID,
        POSTS_COLLECTION_ID,
        // Use a query to show the latest posts first
        [Query.orderDesc("$createdAt")]
    )
}

export const getPostById = async (documentId: string) => {
    return await databases.getDocument(
        POSTS_DATABASE_ID,
        POSTS_COLLECTION_ID,
        documentId,
        []
    )
}

export const getImage = async (imageId: string) => {
    return storage.getFilePreview(IMAGES_BUCKET_ID, imageId)
}

/* The following will be used when I implement accounts */

export const addPost = async (
    postId: string,
    title?: string,
    image?: string,
    bodyText?: string,
    tags?: Array<Tag>
) => {
    await databases.createDocument(
        POSTS_DATABASE_ID,
        POSTS_COLLECTION_ID,
        ID.custom(postId),
        {
            title,
            image,
            bodyText,
            tags,
        }
    )
}

export const deletePost = async (postId: string) => {
    await databases.deleteDocument(
        POSTS_DATABASE_ID,
        POSTS_COLLECTION_ID,
        postId
    )
}
