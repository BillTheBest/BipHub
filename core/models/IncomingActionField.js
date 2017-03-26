import base from './base'
import bookshelf from '../bookshelf'

const IncomingActionField = base.extend({
  tableName: 'incoming_action_field',
  hasTimestamps: true,
  IncomingAction() {
    return this.belongsTo('IncomingAction')
  },
})

const IncomingActionFields = bookshelf.Collection.extend({
  model: IncomingActionField,
})

export default {
  single: bookshelf.model('IncomingActionField', IncomingActionField),
  collection: bookshelf.collection('IncomingActionFields', IncomingActionFields),
}
