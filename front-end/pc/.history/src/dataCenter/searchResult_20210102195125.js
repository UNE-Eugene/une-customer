import { createModel } from 'hox';
import {useState} from 'react';

function useLoginState() {
    const [searchResult, setSearchResult] = useState('')
    return{
        searchResult,
        setSearchResult
    }
}

export default createModel(useLoginState);