export default function BlogForm() {
    return(
        <>
            <h2>Add a new Blog Post</h2>
            <form>
                <label htmlFor="post-title"/>
                    <input name="title" id="post-title" type="text" />
                <label htmlFor="post-description"/>
                <input name="description" id="post-description" type="text" />
                <input type="submit" />
            </form>
        </>
    )
}