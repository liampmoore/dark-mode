import {useState} from 'React';


//Example use: const [name, setName] = useLocalStorage('name', 'Liam')
export const useLocalStorage = (key, initialValue) => {

    //This checks if there is a value for the specified key in localstorage, and saves either the current value or the given new value to state
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    //This is a function that changes the current value in both state and localStorage
    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    //We return the state and the function that changes both state and localStorage
    return [storedValue, setValue]
}
