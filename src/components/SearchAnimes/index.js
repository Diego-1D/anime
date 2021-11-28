import React, { useRef } from "react";
import {
    SearchArea,
    SearchForm,
    Button,
    Input
} from './styles';
import { useGlobalContext } from '../../context/index';

const SearchAnime = () => {
    const { setSearchAnime } = useGlobalContext();

    const searchValue = useRef('');

    const search = (event) => {
        if (event.key === 'Enter') {

            setSearchAnime(searchValue.current.value);
        }
    }

    const handleSubmit = (s) => {
        s.preventDefault();
    }

    return (
        <SearchArea>
            <SearchForm onSubmit={handleSubmit}>
                <Input
                    type='text'
                    id='name'
                    ref={searchValue}
                    onKeyPress={search}
                />
            </SearchForm>
        </SearchArea>
    )

}

export default SearchAnime;