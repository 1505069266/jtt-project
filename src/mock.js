
//import
import Mock from 'mockjs'

//获取mock.Random对象
const Random = Mock.Random

//mock一组数据

const produceNewsData = function () {
  let swiper = []
  for(let i = 0; i < 5; i++){
    let swiperimg = {
      goodsimage:Random.image('375x130'),
    }
    swiper.push(swiperimg)
  }
  let hot = []
  for(let i = 0; i < 10; i++){
    let newArticleObject = {
      title:Random.csentence(20,30),
      goodsimage:Random.image('170x175'),
      goodsId:i+1,
      remain:Random.natural(100,200),
      soldgoods:Random.natural(1000,2000),
      date:Random.date(),
      newprice:Random.float(1,10,2,2),
      beforeprice:Random.float(20,100,2,2),
      goodsname:Random.cword(5,5)
    }
    hot.push(newArticleObject)
  }
  let choice = []
  for(let i = 0; i < 5; i++){
    let choicearr = {
      title:Random.csentence(20,30),
      goodsimage:Random.image('116x116'),
      goodsId:i+1,
      remain:Random.natural(1000,3000),
      date:Random.date(),
      newprice:Random.float(1,10,2,2),
      beforeprice:Random.float(20,100,2,2),
      goodsname:Random.cword(5,5)
    }
    choice.push(choicearr)
  }
  let limit = []
  for(let i = 0; i < 4; i++){
    let limitarr = {
      title:Random.csentence(20,30),
      goodsimage:Random.image('170x120'),
      goodsId:i+1,
      remain:Random.natural(1000,3000),
      date:Random.date() + ' ' + Random.time(),
      newprice:Random.float(1,10,2,2),
      beforeprice:Random.float(20,100,2,2),
      goodsname:Random.cword(5,5)
    }
    limit.push(limitarr)
  }
  return {
    swiper:swiper,
    hot:hot,
    choice:choice,
    limit:limit
  }

}

//Mock.mock( url,post/get, 返回的数据);
Mock.mock('/data/index','post',produceNewsData)


