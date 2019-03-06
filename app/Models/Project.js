'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user () {
    // pertence a 1
    return this.belongsTo('App/Models/User')
  }
  tasks () {
    // um project pode ter varias tasks
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
