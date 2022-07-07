import request from '@/utils/request'
/**角色管理 start */
export function roleAdd(data) {
  return request({
    url: '/admin/role/add',
    method: 'post',
    data
  })
}
export function roleList(data) {
  return request({
    url: '/admin/role/list',
    method: 'get',
  })
}
export function roleDetail(params) {
  return request({
    url: '/admin/role/detail',
    method: 'get',
    params
  })
}
export function roleUpdate(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data
  })
}
export function roleDelete(params) {
  return request({
    url: '/admin/role/delete',
    method: 'post',
    params
  })
}
export function roleAuth(data) {
  return request({
    url: '/admin/role/auth',
    method: 'post',
    data
  })
}
export function roleAuthDetail(params) {
  return request({
    url: '/admin/role/authDetail',
    method: 'get',
    params
  })
}
/**角色管理 end */



/**管理员管理 start */
export function managerAdd(data) {
  return request({
    url: '/admin/manager/add',
    method: 'post',
    data
  })
}
export function managerAll() {
  return request({
    url: '/admin/manager/all',
    method: 'get',
  })
}
export function managerDetail(params) {
  return request({
    url: '/admin/manager/detail',
    method: 'get',
    params
  })
}
export function managerDelete(params) {
  return request({
    url: '/admin/manager/delete',
    method: 'post',
    params
  })
}
export function managerUpdate(data) {
  return request({
    url: '/admin/manager/update',
    method: 'post',
    data
  })
}
/**管理员管理 end */



/**权限管理 start */


export function accessAccessTop() {
  return request({
    url: '/admin/access/accessTop',
    method: 'get',
  })
}

export function accessAdd(data) {
  return request({
    url: '/admin/access/add',
    method: 'post',
    data
  })
}
export function accessAll() {
  return request({
    url: '/admin/access/all',
    method: 'get',
  })
}
export function accessDetail(params) {
  return request({
    url: '/admin/access/detail',
    method: 'get',
    params
  })
}
export function accessDelete(params) {
  return request({
    url: '/admin/access/delete',
    method: 'post',
    params
  })
}
export function accessUpdate(data) {
  return request({
    url: '/admin/access/update',
    method: 'post',
    data
  })
}

/**权限管理 end */

/**轮播图管理 start */


export function bannerAdd(data) {
  return request({
    url: '/admin/focus/add',
    method: 'post',
    data
  })
}
export function bannerList(data) {
  return request({
    url: '/admin/focus/all',
    method: 'get',
  })
}
export function bannerDetail(params) {
  return request({
    url: '/admin/focus/detail',
    method: 'get',
    params
  })
}
export function bannerUpdate(data) {
  return request({
    url: '/admin/focus/update',
    method: 'post',
    data
  })
}
export function bannerDelete(params) {
  return request({
    url: '/admin/focus/delete',
    method: 'post',
    params
  })
}

/**轮播图管理 end */



/**商品类型 start */


export function goodsTypeAdd(data) {
  return request({
    url: '/admin/goodsType/add',
    method: 'post',
    data
  })
}
export function goodsTypeAll(data) {
  return request({
    url: '/admin/goodsType/all',
    method: 'get',
  })
}
export function goodsTypeDetail(params) {
  return request({
    url: '/admin/goodsType/detail',
    method: 'get',
    params
  })
}
export function goodsTypeUpdate(data) {
  return request({
    url: '/admin/goodsType/update',
    method: 'post',
    data
  })
}
export function goodsTypeDelete(params) {
  return request({
    url: '/admin/goodsType/delete',
    method: 'post',
    params
  })
}

/**商品类型 end */

/**商品类型属性 start */


export function goodsTypeAttributeAdd(data) {
  return request({
    url: '/admin/goodsTypeAttribute/add',
    method: 'post',
    data
  })
}
export function goodsTypeAttributeList(params) {
  return request({
    url: '/admin/goodsTypeAttribute/list',
    method: 'get',
    params
  })
}
export function goodsTypeAttributeDetail(params) {
  return request({
    url: '/admin/goodsTypeAttribute/detail',
    method: 'get',
    params
  })
}
export function goodsTypeAttributeUpdate(data) {
  return request({
    url: '/admin/goodsTypeAttribute/update',
    method: 'post',
    data
  })
}
export function goodsTypeAttributeDelete(params) {
  return request({
    url: '/admin/goodsTypeAttribute/delete',
    method: 'post',
    params
  })
}

/**商品类型属性 end */


/**商品分类 start */


export function goodsCateAdd(data) {
  return request({
    url: '/admin/goodsCate/add',
    method: 'post',
    data
  })
}
export function goodsCateAll(data) {
  return request({
    url: '/admin/goodsCate/all',
    method: 'get',
  })
}
export function goodsCateDetail(params) {
  return request({
    url: '/admin/goodsCate/detail',
    method: 'get',
    params
  })
}
export function goodsCateUpdate(data) {
  return request({
    url: '/admin/goodsCate/update',
    method: 'post',
    data
  })
}
export function goodsCateDelete(params) {
  return request({
    url: '/admin/goodsCate/delete',
    method: 'post',
    params
  })
}
export function goodsCateGoodsCateTop() {
  return request({
    url: '/admin/goodsCate/goodsCateTop',
    method: 'get',
  })
}

/**商品分类 end */

/**商品 start */


export function goodsAdd(data) {
  return request({
    url: '/admin/goods/add',
    method: 'post',
    data
  })
}
export function goodsList(params) {
  return request({
    url: '/admin/goods/list',
    method: 'get',
    params
  })
}
export function goodsDetail(params) {
  return request({
    url: '/admin/goods/detail',
    method: 'get',
    params
  })
}
export function goodsUpdate(data) {
  return request({
    url: '/admin/goods/update',
    method: 'post',
    data
  })
}
export function goodsDelete(params) {
  return request({
    url: '/admin/goods/delete',
    method: 'post',
    params
  })
}

export function goodsColorAndType() {
  return request({
    url: '/admin/goods/colorAndType',
    method: 'get',
    
  })
}

export function goodsGoodsTypeAttribute(params) {
  return request({
    url: '/admin/goods/goodsTypeAttribute',
    method: 'get',
    params
  })
}
export function goodsChangeGoodsImageColor(params) {
  return request({
    url: '/admin/goods/changeGoodsImageColor',
    method: 'post',
    params
  })
}
export function goodsRemoveGoodsImage(params) {
  return request({
    url: '/admin/goods/removeGoodsImage',
    method: 'post',
    params
  })
}

/**商品 end */

/**导航 start */


export function navAdd(data) {
  return request({
    url: '/admin/nav/add',
    method: 'post',
    data
  })
}
export function navList(params) {
  return request({
    url: '/admin/nav/list',
    method: 'get',
    params
  })
}
export function navDetail(params) {
  return request({
    url: '/admin/nav/detail',
    method: 'get',
    params
  })
}
export function navUpdate(data) {
  return request({
    url: '/admin/nav/update',
    method: 'post',
    data
  })
}
export function navDelete(params) {
  return request({
    url: '/admin/system/clearCache',
    method: 'post',
    params
  })
}

/**导航 end */

/**系统 start */

export function systemClearCache() {
  return request({
    url: '/admin/system/clearCache',
    method: 'post',
  })
}

/**系统 end */