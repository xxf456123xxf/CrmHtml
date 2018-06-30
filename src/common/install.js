import { request } from '@/common/ajax'
import dialog from '@/common/dialog'
const install = function (Vue, options) {
  const config = {
    data () {
      var configData = {

        booleanList: [{
          value: 0,
          label: '否'
        }, {
          value: 1,
          label: '是'
        }]

      }
      return Object.assign(window.defaultConfig || {}, configData)
    },
    filters: {
      date (date, format) {
        if (date === undefined || date === null) {
          return ''
        }
        if (typeof date === 'string') {
          return new Date(date).Format(format || 'yyyy-MM-dd')
        }
        return date.Format(format || 'yyyy-MM-dd')
      },
      boolean (value) {
        if (value === undefined || value === null) {
          return ''
        }
        return value ? '是' : '否'
      }

    },
    methods: {
      closeAll () {
        // 关闭所有弹出层
        window.parent.layer.closeAll()
      },
      // 文件预览
      filePreview (file) {
        window.open(file.response.fileurl, '_blank')
      },
      fileBeforeUpload (file) {
        var message = null
        var filetype = file.name.substring(file.name.indexOf('.'))
        if (this.fileAccept.split(',').indexOf(filetype) === -1) {
          message = '不支持的格式文件'
        }
        var size = file.size / 1024 / 1024 // MB
        if (size > this.fileSize) {
          message = '不能上传超过' + this.fileSize + 'M的文件'
        }
        if (message) {
          this.$message({
            message: message,
            type: 'warning'
          })
          return false
        }
        return true
      },
      success () {
        // 完成事件
      }
    }
  }
  Vue.mixin(config)
  if (typeof window.vueConfig === 'object') {
    Vue.mixin(window.vueConfig)
  }

  Vue.prototype.$request = request
  Vue.prototype.$dialog = dialog
}
export default install
