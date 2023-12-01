import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route
  .group(() => {
    Route.post('login', 'AuthController.login').as('auth.login')
    Route.post('register', 'AuthController.register').as('auth.register')
    Route.post('profile', 'AuthController.profile').as('profiles.store').middleware(['auth'])

    Route.resource('category', 'CategoriesController').apiOnly().middleware({'*': ['auth']})
    Route.resource('book', 'BooksController').apiOnly().middleware({'*': ['auth']})
    Route.resource('borrow', 'BorrowsController').apiOnly().middleware({'store':['auth']})
  })
  .prefix('/api/v1/')