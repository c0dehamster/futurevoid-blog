export const formatBodyText = (bodyText: string): Array<string> => {
    const SPLIT_BY_LINE_BREAKS = new RegExp(/\r?\n/)
    return bodyText.split(SPLIT_BY_LINE_BREAKS)
}
