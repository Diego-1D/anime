import React from "react";
import {
    Container,
    Title,
    Wrapper,
    CategoryLink
} from './styles';


const MenuCategories = ({categories}) => {
    return (
        <Container>
            <Title>Categorias</Title>
            <Wrapper>
                {
                    categories.map((item) => {
                        return (
                            <CategoryLink to='' >{item}</CategoryLink>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default MenuCategories;