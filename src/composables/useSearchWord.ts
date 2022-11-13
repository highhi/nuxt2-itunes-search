export const useSearchWord = () => {
  const searchWord = useState('searchWord', () => '')

  const setSearchWord = (word: string) => {
    searchWord.value = word
  }

  const clearSearchWord = () => {
    searchWord.value = ''
  }

  return {
    searchWord,
    setSearchWord,
    clearSearchWord,
  }
}

