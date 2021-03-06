import base from './base'
import db from '../bookshelf'

const { bookshelf } = db
const IncomingActionCondition = base.extend({
  tableName: 'incoming_action_conditions',
})

const IncomingActionConditions = bookshelf.Collection.extend({
  model: IncomingActionCondition,
})

export default {
  single: bookshelf.model('IncomingActionCondition', IncomingActionCondition),
  collection: bookshelf.collection('IncomingActionConditions', IncomingActionConditions),
}
