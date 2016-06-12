$(document).ready(function(){
  showPollInfoEvent();
});


var showPollInfoEvent = function(){
  $("a").on('click', function(e){
    e.preventDefault()
    var that = this
    var route = $(this).attr('href')
    var id = $(that).attr('href').split('/')[2]
    console.log($('.poll' + id).next().length)

    if( $('.poll' + id).next().length > 0){
      $('.poll' + id).next().remove()
      console.log('success')
    }else{
        $.ajax({
                url: route,
                method: 'get'
        }).done(function(response){
                $(that).after(response)
        })
    }
  })
}
