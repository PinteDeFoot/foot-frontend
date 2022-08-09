import * as React from 'react';
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { useArticleCards } from '.';
import { useGetArticles } from '../../../api/articles';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const ArticleCards: React.FC = () => {
  useArticleCards();
  const { articles, error, isLoading } = useGetArticles();

  if (isLoading) return <Spinner />;
  if (error) return <div>ERROR...</div>;

  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing="40px" maxWidth={'100%'}>
        {articles.map((article: any) => {
          return <ArticleCard key={article.content.id} article={article} />;
        })}
      </SimpleGrid>
    </>
  );
};
