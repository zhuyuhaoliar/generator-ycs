'use strict'

import {Router} from 'express'
import config from '../../config'
import * as auth from '../../auth/service'
import * as controller from './controller'

const router = new Router()
export const URI = 'imageSamples'

router.get(
  '/',
  auth.appendUser(),
  controller.index
)

router.get(
  '/:id',
  auth.appendUser(),
  controller.show
)

router.post(
  '/',
  auth.appendUser(),
  config.storage.multer.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 8 }
  ]),
  controller.create
)

router.put(
  '/:id',
  auth.appendUser(),
  config.storage.multer.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 8 }
  ]),
  controller.update
)

router.patch(
  '/:id',
  auth.appendUser(),
  config.storage.multer.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 8 }
  ]),
  controller.updatePartial
)

router.delete(
  '/:id',
  auth.appendUser(),
  controller.destroy
)

export default router
