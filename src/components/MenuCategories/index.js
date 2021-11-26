import React from "react";
import {
    Container,
    Title,
    Wrapper,
    CategoryLink,
    CheckBox,
    ItemCheck
} from './styles';

const MenuCategories = ({ categories, menuFixed, filterAnime }) => {

    return (
        <Container menuFixed={menuFixed}>
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