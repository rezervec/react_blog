// делим количество полученных статей на количество, которое хотим отобразить
export const pagesCounter = (postsAmount, postsLimit) => {
  return Math.ceil(postsAmount / postsLimit)
}