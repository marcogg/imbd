const ImgFetch = async () => {
  const apiKey = 'fa0ca8bc7f638749177837ee279a89d7'
  const url = await `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}&language=es`
  console.log(url)
  return url
}

export default ImgFetch
