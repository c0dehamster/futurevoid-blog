import { Client, Databases, ID, Storage } from "appwrite"

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66e7cb41000fd410bc4a")

export const databases = new Databases(client)
export const storage = new Storage(client)

// Test code, will likely remain useless

/* const promise = databases.createDocument(
    "66e81c52003e4dc1f440",
    "66e8247a000d6987b96d",
    ID.custom("database-test-post-4"),
    {
        title: "This post has been uploaded to the database",
        bodyText:
            "If this works, then I am pretty close to being set up for making the blog public",
        tags: ["test", "dummy", "to be deleted", "database", "appwrite"],
    }
)

promise.then(
    (response) => {
        console.log(response)
    },
    (error) => {
        console.log(error)
    }
)
 */
