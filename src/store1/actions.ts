import { Commit, Action, ActionTree } from 'vuex'
import { State, Book, AddToCartPayload } from './index'

const addToCart: Action<State, any> = (context: { commit: Commit }, book: Book) => {
  if (book.inventory > 0) {
    const payload: AddToCartPayload = {
      id: book.id
    }
    context.commit('ADD_TO_CART', payload)
  }
}

const actions: ActionTree<State, any> = {
  addToCart
}

export default actions
