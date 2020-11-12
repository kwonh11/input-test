import React from 'react';


export default function useDebounce(props) {
    const { callback, ms, args } = props;
    React.useEffect(() => {
        const id = setTimeout(callback, ms);
        return () => clearTimeout(id);
    }, args);
}