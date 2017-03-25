import Q from 'q'
import base from './base'

const OutgoingAction = base.extend({
  tableName: 'outgoing_actions',
  hasTimestamps: true,
  api() {
    return this.belongsTo('Apis')
  },
}, {
  createMany({ outgoingActions, apiId }) {
    const forgedOutActions = outgoingActions.map((outgoingAction) => {
      outgoingAction.api_id = apiId
      return this.create(outgoingAction, null)
    })
    Q.allSettled(forgedOutActions)
  },
})

export default OutgoingAction