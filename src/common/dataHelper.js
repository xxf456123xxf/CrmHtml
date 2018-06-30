
const dataHelper = {
  attrs: function (entity) {
    if (_.isArray(entity)) {
      return _.map(entity, dataHelper.attrs)
    }
    var attr = _.mapObject(entity.attributes, function (val) {
      return val.value || val.guid
    })
    var keys = _.map(_.keys(attr), function (item) { return item.replace(/\w+\./, '') })
    var vaues = _.values(attr)
    return _.object(keys, vaues)
  },
  attrsName: function (entity) {
    if (_.isArray(entity)) {
      return _.map(entity, dataHelper.attrsName)
    }
    var attr = _.mapObject(entity.attributes, function (val) {
      return val.name || val.value || val.guid
    })
    var keys = _.map(_.keys(attr), function (item) { return item.replace(/\w+\./, '') })
    var vaues = _.values(attr)
    return _.object(keys, vaues)
  }
}
export default dataHelper
