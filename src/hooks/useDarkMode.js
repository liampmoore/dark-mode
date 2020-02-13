import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkModeBoolean, setDarkMode] = useLocalStorage('darkmodesetting', initialValue);

    useEffect(() => {
        darkModeBoolean ?
            document.querySelector("body").classList.add("dark-mode") :
            document.querySelector("body").classList.remove("dark-mode")
    },[darkModeBoolean])

    return [darkModeBoolean, setDarkMode];

}