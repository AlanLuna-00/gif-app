export const getGifs = async (category) => {
    const api_key = `R6IiWBOzwmj03cexIKMDM2ggRgIQpmxu`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}
