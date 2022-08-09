import { rest } from 'msw';
import { userDetailsMock } from './mockFiles/userDetails';
import { articlesMock } from './mockFiles/articleList';
import { articleDetailsMock } from './mockFiles/articleDetails';

export const handlers = [
  // USER
  rest.post('/api/v1/users/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200), ctx.json({ userId: '123test' }));
  }),

  rest.get('/api/v1/users/:userId', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }
    return res(ctx.status(200), ctx.json(userDetailsMock));
  }),
  //ARTICLE
  rest.get('/api-rest/homepage/last-articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(articlesMock));
  }),
  rest.get('/api-rest/article/detail/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(articleDetailsMock));
  }),
];
