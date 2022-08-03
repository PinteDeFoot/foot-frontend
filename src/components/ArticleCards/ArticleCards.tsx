import { SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import { useArticleCards } from '.';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const ArticleCards: React.FC = () => {
  useArticleCards();
  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing="40px" maxWidth={'66%'}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </SimpleGrid>
    </>
  );
};
