import React from 'react';
import { CategoryPageTemplate } from 'templates/CategoryPageTemplate';
import { CategoryCard } from 'components/molecules/CategoryCard/CategoryCard';
import { categoryData as data } from 'data/categoryData';

export const Category = () => (
  <CategoryPageTemplate pageType="category">
    {data.map((item) => (
      <CategoryCard
        typeOfCard="category"
        category={item.category}
        imageUrl={item.imageUrl}
        key={item.id}
      />
    ))}
  </CategoryPageTemplate>
);
