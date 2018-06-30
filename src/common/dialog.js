
const dialog = {
  msg: function (msg) {
    // debugger
    vm.$message({

      message: msg
    })
  },
  alert: function (msg) {
    vm.$alert(msg, '', {
      confirmButtonText: '确定',
      callback: action => {

      }
    })
  },
  confirm: function (msg) {
    return vm.$confirm(msg, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
  },
  load: function () {
    // Vue.load(2)
  },
  loadClose: function () {
    // Vue.closeAll('loading')
  },

  close: function (index) {
    // Vue.close(index)
  },
  closeAll: function (type) {
    // Vue.closeAll(type)
  },

  error: function (msg) {
    vm.$notify({
      title: '错误',
      message: msg,
      type: 'error'
    })
  }
}

export default dialog
