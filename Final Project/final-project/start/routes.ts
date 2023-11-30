import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route
  .group(() => {
    Route.resource('category', 'CategoriesController').apiOnly().middleware({'*': ['auth']})
    Route.resource('book', 'BooksController').apiOnly().middleware({'*': ['auth']})
    Route.resource('borrow', 'BorrowsController').apiOnly().middleware({'store':['auth']})
    Route.post('register', 'AuthController.register').as('auth.register')
    Route.post('login', 'AuthController.login').as('auth.login')
    Route.post('profile', 'ProfilesController.store').as('profiles.store').middleware(['auth'])
  })
  .prefix('/api/v1/')