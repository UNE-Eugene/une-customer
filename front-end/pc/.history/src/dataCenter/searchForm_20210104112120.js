import { createModel } from 'hox';
import {useState} from 'react';

function useSearchForm() {
    const [searchForm, setSearchForm] = useState([])
    return{
        searchForm,
        setSearchForm
    }
}

export default createModel(useSearchForm);