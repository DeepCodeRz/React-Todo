import {useState, useEffect} from 'react';

export default function DarkModeToggle(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        props.toggleDarkMode();

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
                className="sr-only peer"
            />
            <div
                className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Dark Mode
            </span>
        </label>
    );
}