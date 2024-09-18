import type { Tag } from "./tag"

export interface DBDocument {
    title: string | null
    imageId: string | null
    bodyText: string | null
    tags: Array<Tag>
}
