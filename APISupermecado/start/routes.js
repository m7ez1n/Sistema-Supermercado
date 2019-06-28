'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('products', 'ProdutoController').apiOnly()
}).middleware(['auth'])
