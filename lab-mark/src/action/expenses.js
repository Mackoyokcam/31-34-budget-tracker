import uuid from 'uuid'

export const create = ({name, price, categoryID}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryID,
    timestamp: new Date(),
    id: uuid.v1(),
  },
})

export const update = (card) => ({
  type: 'EXPENSE_UPDATE',
  payload: card,
})

export const destroy = (card) => ({
  type: 'EXPENSE_DESTROY',
  payload: card,
})
