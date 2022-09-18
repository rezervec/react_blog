import { useState } from "react"

// принимаем callback, передаём состояние промиса и ошибки
export const useFetch = (callback) => {
  // задача isLoading сообщать в каком состоянии промис с данными
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (e) {
      setError(e.message)
    } finally {
      // создаём искусственную задержку    ! BEFORE RELEASE !    
      setTimeout(async () => {
        // обновляем соостояние на "завершено"
        setIsLoading(false)
      }, 1000)
    }
  }

  return [fetchPosts, isLoading, error]
}