import imgLazyDirective from './imgLazyDirective'

export default {
  install: (app) => {
    app.directive('imgLazy', imgLazyDirective)
  }
}
