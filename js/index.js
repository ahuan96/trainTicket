layui.use(['laytpl','form'], function () {
  var laytpl = layui.laytpl
  var form = layui.form

  // 设置-初始数据
  let data = {
    name: '万新贵',
    idcard: '3423425423*****2353',
    list: [
      {
        from: '上海',
        to: '昆山南',
        no: 'G7046',
        time: '2019-01-25 05:53',
        seat: '01车 02号A',
        level: '二等座',
        price: '24.50',
        type: '成人',
        ispay: true,
      },
      {
        from: '南京',
        to: '合肥',
        no: 'G896',
        time: '2020-11-10 06:23',
        seat: '02车 05号A',
        level: '一等座',
        price: '77.50',
        type: '未成年',
        ispay: false,
      },{
        from: '上海',
        to: '昆山南',
        no: 'G7046',
        time: '2019-01-25 05:53',
        seat: '01车 02号A',
        level: '二等座',
        price: '24.50',
        type: '成人',
        ispay: true,
      },
      {
        from: '南京',
        to: '合肥',
        no: 'G896',
        time: '2020-11-10 06:23',
        seat: '02车 05号A',
        level: '一等座',
        price: '77.50',
        type: '未成年',
        ispay: false,
      },
    ],
  }

  // 渲染视图模板
  var getTpl = demo.innerHTML,
    view = document.getElementById('view')
  laytpl(getTpl).render(data, function (html) {
    view.innerHTML = html
  })


  // 监听选择全部
  $(document).on('click','.selAll',function(e){

      if($(this).hasClass('active')){
        $(this).removeClass('active')
        $('.tab-list .checkbox').removeClass('active')
      }else{
        $(this).addClass('active')
        $('.tab-list .checkbox').addClass('active')
      }
      setView()
  })

  // 监听单选全部
  $(document).on('click','.selOne',function(e){

    if($(this).hasClass('active')){
      $(this).removeClass('active')
      $('.selAll').removeClass('active')
    }else{
      $(this).addClass('active')
      // 关联全选
      console.log($('.tab-list li .active').length , $('.tab-list li').length)
      if($('.tab-list li .active').length == $('.tab-list li').length){
        $('.selAll').addClass('active')
      }
    }
    setView()
})

// 购买保险
$(document).on('click','.baoBtn',function(e){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
        $('.tab-list .bao').removeClass('active')
    }else{
        $(this).addClass('active')
        $('.tab-list .bao').addClass('active')
    }
    
})

  // 重置一些视图显示
  function setView(){
      let count  = $('.tab-list li .active').length
      console.log(11,count)
      $('.selCount').text(count)
  }

})
