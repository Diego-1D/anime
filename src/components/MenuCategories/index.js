import React from "react";
import {
    Container,
    Title,
    Wrapper,
    CategoryLink
} from './styles';

const categories = ['Todos', 'Aventura', 'Fantasia', 'Super poder', 'Ninjas', 'Anti-Heroi', 'Piratas', 'Battle Royale', 'Guerra', 'Drama', 'Espionagem']

const MenuCategories = () => {
    return (
        <Container>
            <Title>Categorias</Title>
            <Wrapper>
                {
                    categories.map((item) => {
                        return (
                            <CategoryLink to=''>{item}</CategoryLink>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default MenuCategories;