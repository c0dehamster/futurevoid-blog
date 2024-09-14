import type { Tag } from "./tag"

export interface Post {
    id: string
    title?: string
    image?: string // TODO: descriptions
    bodyText?: string
    tags?: Array<Tag>
}
