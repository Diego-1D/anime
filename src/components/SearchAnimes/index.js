import React from "react";
import {
    SearchArea,
    SearchForm,
    SearchTitle,
    SearchFormControl,
    Input
} from './styles';
import { useGlobalContext } from '../../context/index';

const SearchAnime = () => {
    const { setSearchAnime } = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(() => {
        searchValue.current.focus();
    }, [])

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
                    <SearchTitle>Buscar:</SearchTitle>
                    <Input
                        type='text'
                        id='title'
                        ref={searchValue}
                        onChange={search}
                    />
                </SearchFormControl>
            </SearchForm>
        </SearchArea>
    )

}

export default SearchAnime;