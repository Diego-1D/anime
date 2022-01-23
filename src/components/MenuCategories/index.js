import React, { useState } from "react";
import {
    Container,
    Title,
    Wrapper,
    Select,
    Option,
    CategoryLink,
} from './styles';

const MenuCategories = ({ categories, filterAnime }) => {

    return (
        <Container>
            <Title>Categorias</Title>
            <Wrapper>
                {
                    categories.map((item, index) => {
                        return (
                            <CategoryLink
                                key={index}
                                onClick={() => filterAnime(item)}
                            >{item}
                            </CategoryLink>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default MenuCategories;