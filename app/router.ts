import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  router.post('/app/add', controller.apps.addNewApp)
  router.post('/app/del', controller.apps.delApp)
  router.post('/app/edit', controller.apps.editApp)
  router.post('/app/list', controller.apps.list)
}
