import type { Tag } from "$lib/types/tag"
import { writable } from "svelte/store"

const createTagsStore = () => {
    const { set, update, subscribe } = writable<Array<Tag>>([])

    const addTag = (tag: Tag) => {
        update((value) => [...value, tag])
    }

    const removeTag = (tag: Tag) => {
        update((value) => value.filter((item) => item !== tag))
    }

    return {
        set,
        subscribe,
        addTag,
        removeTag,
    }
}

export const tagsSelectedStore = createTagsStore()
