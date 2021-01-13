import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [mode, setMode] = useLocalStorage('dark mode', initialValue)

    return [mode, setMode]
}

export default useDarkMode