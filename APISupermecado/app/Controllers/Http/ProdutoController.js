'use strict'

const moment = require('moment')
const Produto = use('App/Models/Produto')

class ProdutoController {
  /**
   * Show a list of all produtos.
   * GET produtos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const products = await Produto.all()

    return products
  }

  /**
   * Create/save a new produto.
   * POST produtos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['marca', 'nome', 'preco', 'dataValidade'])

    const produto = await Produto.create({ ...data, user_id: auth.user.id })

    return produto
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response, auth }) {
    const product = await Produto.findOrFail(params.id)

    if (product.user_id !== auth.user.id) {
      return response.status(401).send({
        error: {
          message: 'Só usuário que cadastrou o produto pode acessar'
        }
      })
    }

    await product.load('user')

    return product
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const product = await Produto.findOrFail(params.id)
    const passed = moment().isAfter(product.dataValidade)

    if (passed) {
      return response.status(401).send({
        error: {
          message: 'Esse produto já venceu, retire do estoque!'
        }
      })
    }

    const data = request.only(['marca', 'nome', 'preco'])

    product.merge(data)

    await product.save()

    return product
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = ProdutoController
