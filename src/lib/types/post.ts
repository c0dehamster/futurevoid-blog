import type { Tag } from "./tag"

export interface Post {
    id: string
    title: string | null
    imageUrl: string | null // TODO: descriptions
    bodyText: string | null
    tags: Array<Tag>
}
