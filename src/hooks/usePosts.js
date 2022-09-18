import { useMemo } from "react"

// сортируем статьи по значению выпадающего списка
// useSortPostsSelect перезапишется при изменении значения дропдауна или при изменении массива статей
const useSortPostsSelect = (posts, select) => {
  const sortPostsSelect = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
    }
    return posts
  }, [posts, select])

  return sortPostsSelect
}

// сортируем статьи по значению выпадающего списка и поисковой строки
export const usePosts = (posts, select, input) => {
  // передаём в функцию все статьи и значение селекта сортировки, записываем отсортированный массив
  const sortedFromSelect = useSortPostsSelect(posts, select)

  const sortPostsSelectAndInput = useMemo(() => {
    // выводим статьи где есть совпадение со значением из поисковой строки, все значения сравниваем в нижнем регистре
    return sortedFromSelect.filter(post => post.title.toLowerCase().includes(input.toLowerCase()))
  }, [sortedFromSelect, input])

  return sortPostsSelectAndInput
}