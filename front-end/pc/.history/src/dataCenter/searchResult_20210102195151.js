import { createModel } from 'hox';
import {useState} from 'react';

function useSearchResult() {
    const [searchResult, setSearchResult] = useState('')
    return{
        searchResult,
        setSearchResult
    }
}

export default createModel(useSearchResult);