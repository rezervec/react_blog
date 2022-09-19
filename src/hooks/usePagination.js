import { useMemo } from "react";

export const usePagination = (pagesAmount) => {
  const pagination = useMemo(() => {
    // массив с номерами страниц
    let pagesArry = []
    for (let i = 0; i < pagesAmount; i++) {
      pagesArry.push(i + 1)
    }
    return pagesArry
  }, [pagesAmount])

  return pagination
}