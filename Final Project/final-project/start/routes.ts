import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route
  .group(() => {
    Route.post('login', 'AuthController.login').as('auth.login')
    Route.post('register', 'AuthController.register').as('auth.register')
    Route.post('verifikasi-otp', 'AuthController.otpConfirmation').as('auth.otpConfirmation')
    Route.post('profile', 'AuthController.profile').as('profiles.store').middleware(['auth'])

    Route.resource('category', 'CategoriesController').apiOnly().middleware({
      'index': ['auth', 'verify'],
      'store': ['auth', 'verify', 'admin'],
      'show': ['auth', 'verify'],
      'update': ['auth', 'verify', 'admin'],
      'destroy': ['auth', 'verify', 'admin'],
    })
    Route.resource('book', 'BooksController').apiOnly().middleware({
      'index': ['auth', 'verify'],
      'store': ['auth', 'verify', 'admin'],
      'show': ['auth', 'verify'],
      'update': ['auth', 'verify', 'admin'],
      'destroy': ['auth', 'verify', 'admin'],
    })
    Route.get('peminjaman', 'BorrowsController.index').middleware(['auth', 'verify', 'admin'])
    Route.post('buku/:id/peminjaman', 'BorrowsController.store').middleware(['auth','verify','user'])
    Route.get('peminjaman/:id', 'BorrowsController.show').middleware(['auth','verify','admin'])

  })
  .prefix('/api/v1/')