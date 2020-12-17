import { createModel } from 'hox';
import {useState} from 'react';

function useLoginState() {
    const [username, setUsername] = useState('')
    return{
        username,
        setUsername
    }
}

export default createModel(useLoginState);