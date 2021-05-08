export const getGifs = async(category) => {
    const ApiKey = "twWmjcdfWyH38x8ABDY4nmf1jsHCFBZa";
    const ApiRest = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es`;
    const resp = await fetch(ApiRest);
    //console.log(gifsValores.url);
    const {data} = await resp.json();
    //console.log(data)

    const gif = data.map((img)=>{
        //console.log(img.images?.downsized_medium.url);
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gif;
    //console.log(gif);
    //const {url} = await data[0].images.original;
}
