import React,{useEffect, useRef} from "react";
import {
    SearchArea,
    SearchForm,
    SearchTitle,
    SearchFormControl,
    Input
} from './styles';
import { useGlobalContext } from '../../context/index';

const SearchAnime = () => {
    const { setSearchAnime} = useGlobalContext();

    const searchValue = useRef('');

    const search = () => {
        setSearchAnime(searchValue.current.value);
    }

    const handleSubmit = (s) => {
            s.preventDefault();
    }
    
    return (
        <SearchArea>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormControl>
                    <SearchTitle>Buscar: </SearchTitle>
                    <Input
                        type='text'
                        id='name'
                        ref={searchValue}
                        onChange={search}
                    />
                </SearchFormControl>
            </SearchForm>

        </SearchArea>
    )

}

export default SearchAnime;