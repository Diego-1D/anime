import React from "react";
import {
    Container,
    Title,
    Wrapper,
    CategoryLink
} from './styles';

const MenuCategories = () => {
    return (
        <Container>
            <Title>Categorias</Title>
            <Wrapper>
                <CategoryLink>Todos</CategoryLink>
                <CategoryLink>Aventura</CategoryLink>
                <CategoryLink>Fantasia</CategoryLink>
                <CategoryLink>Super poder</CategoryLink>
                <CategoryLink>Ninjas</CategoryLink>
                <CategoryLink>Anti-Heroi</CategoryLink>
                <CategoryLink>Piratas</CategoryLink>
                <CategoryLink>Battle Royale</CategoryLink>
                <CategoryLink>Guerra</CategoryLink>
                <CategoryLink>Drama</CategoryLink>
                <CategoryLink>Espionagem</CategoryLink>

            </Wrapper>
        </Container>
    )
}

export default MenuCategories;