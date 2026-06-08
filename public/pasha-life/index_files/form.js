

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


$(document).ready(function () {

	if ($(".custom_select").length) {
		var _select_length = $(".for_customertype customertype").length;
		for (var i = 0; i < _select_length; i++) {
            var el_id=$(".for_customertype customertype").eq(i).find('customertypeid').text();
            var el_txt=$(".for_customertype customertype").eq(i).find('customertypename').text();
            
            var names=$(".for_customertype customertype").eq(i).find('names');
//            console.log(names);
            for(var k=0;k<names.length;k++){
                // console.log(names.eq(k).find('name').text());
                if(names.eq(k).find('language').text()==$('input[name=lang]').val()){
                    el_txt=names.eq(k).find('name').text();
                    $("#customertype").append("<option value='"+el_id+"'>"+el_txt+"</option>")
                }
            }

		}
        _select_length = $(".for_contracttype contracttype").length;
		for (var i = 0; i < _select_length; i++) {
            var el_id=$(".for_contracttype contracttype").eq(i).find('contracttypeid').text();
            var el_txt=$(".for_contracttype contracttype").eq(i).find('contracttypename').text();
			$("#contracttype").append("<option value='"+el_id+"'>"+el_txt+"</option>")
		}
	}
    if($('asa').length){
        $('input[name=customer_name]').val($('asa').eq(0).text());  
        $('input[name=borc]').val($('borc').eq(0).text());  
    }
});

$(document).on("change", "#customertype", function () {
  
    var value=$(this).val();
    $.ajax({
        url: '?customertype='+value,
        method: 'get',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
      

        },
        success: function (data) {
            var html=$(data).find('contracttypes').html();
            $('#contracttype').html('');
            console.log(html);
            for (var i = 0; i < $(html).length; i++) {
                var el_id=$(html).eq(i).find('contracttypeid').text();
                var el_txt=$(html).eq(i).find('contracttypename').text();
                $("#contracttype").append("<option value='"+el_id+"'>"+el_txt+"</option>")
            }
        }
    });
});

function fileSelect(id, e){
    console.log(e.target.files[0].name);
}

$(document).on('change', 'input[name=file]', function (e) {
   
    $(this).parent().find('span').text(e.target.files[0].name);
});

$(document).on('submit', '.js_form', function (e) {
    e.preventDefault();

    var form=$(this);
    var elements=form.find('input[type=text]');
    var errors=[];
    elements.removeClass('alert');
    elements.each((i,el)=>{
     
		if($(el).attr('name')=='subject'){

		}
        else if(el.value=='')
        {
            errors.push($(el).attr('name'));
            $(el).addClass('alert');
        }
    });

    if(form.find('textarea[name=message]').length>0){
        if(form.find('textarea[name=message]').val().length<11){
            form.find('textarea[name=message]').addClass('alert');
            errors.push('textarea');
        }
    }


    console.log(errors);
    if(!errors.length)
    {
        form.find('button[type=submit]').hide();
                form.closest('.career_sections').addClass('preload');

        if(form.find('input[name=g-recaptcha]').length==0){
            var key=form.find('.my_captcha').eq(0).attr('data-key');
            grecaptcha.ready(function() {
                grecaptcha.execute(key, {action: 'authenticate'}).then(function(token) {
                    form.find('.my_captcha').eq(0).prepend('<input type="hidden" name="g-recaptcha" value="' + token + '">');
                    my_send_form(form);
                });
            });
        }
   
    }

});


function my_send_form(form)
{
    
    var data=new FormData(form[0]);
    $.ajax({
        url: '',
        method: 'post',
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
            // form.closest('.career_sections').addClass('preload');

            setTimeout(()=>{
                form.closest('.career_sections').removeClass('preload');

                var el=$('.success_txt').clone();
                el.show();
                $('#ldf').remove();
                form.html(el);
                
            },1000);
        },
        success: function (data) {
            // form.closest('.career_sections').removeClass('preload');

            // var el=$('.success_txt').clone();
            // el.show();
            // $('#ldf').remove();
            // if(data.success){
            //     form.html(el);
            // }


        }
    });
}

$(document).on('submit', '.js_block', function (e) {
    
    e.preventDefault();

    var form=$(this);
    var data=new FormData(form[0]);
    data.append('uid',$('input[name=uid]').val());

    $.ajax({
        url: '',
        method: 'post',
        data: data,
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
            form.closest('.career_sections').addClass('preload');
        },
        success: function (data) {

            var error=$(data).find('serror').eq(0).text();
            $('#ldf').remove();
            if(error)
            {
                var txt=error.split('-');
                form.closest('.career_sections').removeClass('preload');

                $('.career_sections').append('<div id="ldf" style="margin-top:20px;color:#fff;background-color:red;text-align:center;height:40px;line-height:40px;">'+txt[1]+'</div>');
            }
            else{
                form.closest('.career_sections').removeClass('preload');

                console.log($(data).find('asa').eq(0).text());
                console.log($(data).find('borc').eq(0).text());


                $('.payment-block').html($(data).find('.payment-block').eq(0).html());
                $('input[name=customer_name]').val($(data).find('asa').eq(0).text());
                $('input[name=borc]').val($(data).find('borc').eq(0).text());

                $('input[name=my_uid]').val($('input[name=uid]').val());

              
    
            }      
           
        }
    });
});





/* Form steps emulation begin */
$(document).on("click", ".form_steps a", function () {
    return false;
    var _this = $(this),
    _this_index = _this.parent().index();
    $(".career_sections section").removeClass("show_me").eq(_this_index).addClass("show_me");
    $(".form_steps .step").addClass("fill")
    _this.parent().addClass("fill").find("~ .step").removeClass("fill")
    return false;
});
/* Form steps emulation end */

function career_form(form)
{

    var data=new FormData(form[0]);
    $.ajax({
        url: '',
        method: 'post',
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
            form.find('button[type=submit]').hide();
            form.closest('.career_sections').addClass('preload');
        },
        success: function (data) {
            form.closest('.career_sections').removeClass('preload');

            var el=$('.success_txt').clone();
            el.show();
            $('#ldf').remove();
            form.html(el);
        }
    });
}

var file_check=0;
$(document).on('change','input[type=file]',function (e) {
    var files=e.target.files;
    console.log(files);
    if(files[0].size<3000000) file_check=1;
});

$(document).on("click", ".next-step", function () {

    if(window.location.search.match('career_form')) return false;
  var _this = $(this),
  _this_index = _this.closest('section').index();
  var inputs=_this.closest('section').find('input[type=text]');
  var selecs=_this.closest('section').find('select');

  var errors=[];
  inputs.removeClass('alert');
  selecs.removeClass('alert');

  inputs.each((i,el)=>{
      if(el.value=='' && !$(el).hasClass('optional'))
      {
          errors.push($(el).attr('name'));
          $(el).addClass('alert');
      }
  });
  selecs.each((i,el)=>{
  
    if(el.value=='0' && !$(el).hasClass('optional'))
    {
        errors.push($(el).attr('name'));
        $(el).addClass('alert');
    }
      
});


if(_this.closest('section').find('input[type=file]').length>0){
    let elo=_this.closest('section').find('input[type=file]');
    if(_this.closest('section').find('input[type=file]').val()==''){
        errors.push('File error');
        $('#fldr').css({"border":"1px solid red"});

    }

    $('#reda_txt').remove();
    if(file_check!=1){
        errors.push('File error');
        $('#fldr').css({"border":"1px solid red"});
        if(elo.attr('id')!='didi') {
            $('.fule_upload').after('<span id="reda_txt" style="color:red;">Fayl həcmi 3mb dan cox olmamalıdır</span>');
        }

    }
}

console.log(errors);

  if(_this_index==0){
      $('#red_txt').remove();

      var email=$('input[name=email]').val();
      if (validateEmail(email)) {
          $('input[name=email]').removeClass('alert');
      } else if(email) {
          $('input[name=email]').addClass('alert');
          $('input[name=email]').after('<span id="red_txt" style="color:red;">Email düzgün deyil</span>');
          errors.push('Email is not valid');
      }
  }


  if(errors.length) return false;

  if(_this_index==4){

      if(!$('input[name=agree]').is(':checked')){
          $('input[name=agree]').closest('label').css({"color":"red"});
          $('.err_txt').css({"color":"red"});
          return false;
      }



      var form=$('#career_form');
      var key=form.find('.my_captcha').eq(0).attr('data-key');
      grecaptcha.ready(function() {
          grecaptcha.execute(key, {action: 'authenticate'}).then(function(token) {
              form.find('.my_captcha').eq(0).prepend('<input type="hidden" name="g-recaptcha" value="' + token + '">');
              career_form(form);
          });
      });
      return false;
  }


  if(_this_index==0){
    // getAjaxData('?api=edu_field','#edufield',1);
    // getAjaxData('?api=edu_level','#edulevel',1);
    // getAjaxData('?api=edu_name','#eduname',1);
    // getAjaxData('?api=professions','#edupro',1);
  }
  else if(_this_index==1){
   // getAjaxData('?api=job_field','#jobfield',1);
  }
  else if(_this_index==3){
   // getAjaxData('?api=programs','#program',1);
  }

  $(".career_sections section").removeClass("show_me").eq(_this_index+1).addClass("show_me");
  $(".form_steps .step").eq(_this_index+1).addClass("fill")
  return false;
});

$(document).on('mouseup','.job_end_check',function () {

    console.log('click ip');
    if(!$(this).find('input').is(':checked')){
        $(this).closest('.skill_item').find('.job_end_item').addClass('optional');
    }
    else{
        $(this).closest('.skill_item').find('.job_end_item').removeClass('optional');
    }
});

$(document).on("click", ".previous", function () {
  var _this = $(this),
  _this_index = _this.closest('section').index();
  $(".career_sections section").removeClass("show_me").eq(_this_index-1).addClass("show_me");
  $(".form_steps .step").eq(_this_index).removeClass("fill")
  return false;
});


setTimeout((e)=>{
    // if($('select[name=req_type]').length>0){
    //     getAjaxData('?api=request_type','req_type');
    // }
    if($('select[name=drive]').length>0){
        //getAjaxData('?api=drive_certificate','drive');
    }
},200);


function getAjaxData(url,name,h=0){
    $.ajax({
        url: url,
        method: 'get',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {

        },
        success: function (data) {
           var lang=$('input[name=lang_api]').val();
           var arr=[1,2];
           var dt;
           if(name=='req_type'){
                dt=data.data[lang];
                dt.map((item,index)=>{
                    var cls='';
                    if(arr.includes(item.id)) cls='data-class="another"';
                    else cls='data-class="normal"'; 

                    $('select[name='+name+']').append('<option '+cls+' value="'+item.id+'">'+item.name+'</option>');
                });
           }
           else if(name=='product_type'){
            dt=data.data;
            dt.map((item,index)=>{
                var cls='data-class="normal"'; 
                $('select[name='+name+']').append('<option '+cls+' value="'+item.id+'">'+item.typeShortName+'</option>');
            });
           }
           else if(h==1){
               console.log('rgrege');
               dt=data;
            dt.map((item,index)=>{
                var cls='data-class="normal"'; 
                $(name).append('<option '+cls+' value="'+item.id+'">'+item.name+'</option>');
            });
           }
           else {
            dt=($('input[name=action]').val()=='career') ? data : data.data[lang];
            dt.map((item,index)=>{
                var cls='data-class="normal"'; 
                $('select[name='+name+']').append('<option '+cls+' value="'+item.id+'">'+item.name+'</option>');
            });
           }
           console.log(dt);
           console.log(name);

        }
    });
}



$(document).on("change", "select[name=req_type]", function () {
	var _this = $(this),
	_this_selected = _this.find("option:selected")
	
    var sbj_len=$('select[name=subject_type] option').length;
    console.log(sbj_len);
    if(sbj_len==1){
        // getAjaxData('?api=subject_type','subject_type');
        // getAjaxData('?api=product_type','product_type');
        // getAjaxData('?api=response_type','response_type');
    }

	if (_this_selected.data("class") == "another") {
		$(".another").show();
		$(".another_hide").hide();
	} else {
		$(".another").hide();
		$(".another_hide").show();
	}
});




$(document).on("click", ".add_button", function () {

    if(window.location.search.match('career_form')) return false;

    var el=$(this).closest('section').find('.skill_item').eq(0).clone();
    el.append('<div class="remove_button"><a href="javascript:void(0);"></a></div>');
    //$(this).closest('section').find('.add_button').prepend(el);
    if($(this).hasClass('program')){
        el.insertAfter($(this).closest('fieldset').find('.skill_item').last());
    } else {
        el.insertAfter($(this).closest('section').find('.skill_item').last());
    }
});

$(document).on("click", ".remove_button", function () {

    if(window.location.search.match('career_form')) return false;


    $(this).closest('.skill_item').remove();
});


/* Check input begin */
$(document).on("change", ".chek_input .check_item input", function () {
    var _this = $(this);
    if (_this.is(':checked')) {
        $(".chek_input .input input").removeAttr("disabled");
    } else {
        $(".chek_input .input input").attr("disabled", "disabled");
    }
});
/* Check input end */

/* Show text begin */
$(document).on("click", ".show_all", function () {
    var _this = $(this);
    _this.parents(".text").hide().next().show();
});
/* Show text end */



$(document).on("change", ".fule_upload input", function () {
    $(".upload_sides .r_side").show();
    return false;
});

$(document).on("change", ".smart_radio input", function () {
    var _checked_index = $(".smart_radio input:checked").parent().index();
    if (_checked_index == 1) {
        $(".smart_radio + .check_item").addClass("disabled")
    } else {
        $(".smart_radio + .check_item").removeClass("disabled")

    }
});

$(document).on("change", ".smart_radio + .check_item input", function () {
    if ($(".smart_radio + .check_item input:checked").length > 0) {
        $(".smart_radio label:first-child input").click();
    }
});


/*
$(document).keydown(function(e) {
  if (e.keyCode == 49) {
    $(".career_sections section.show_me").removeClass("show_me").prev().addClass("show_me");
  }
  if (e.keyCode == 50) {
    $(".career_sections section.show_me").removeClass("show_me").next().addClass("show_me");
  }
});*/



