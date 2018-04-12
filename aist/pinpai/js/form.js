(function(){
    var hintText={name:{hint:"请输入3-12个字符的姓名（包括字母/数字/下划线）",right:"√姓名正确",wrong:"×姓名格式有误，请重新输入"},
            phone:{hint:"请输入11位电话号码",right:"√电话号码输入正确",wrong:"×电话号码输入有误，请重新输入"},
            tousu:{hint:"请输入内容",right:"√内容输入正确",wrong:"×请输入内容"}};
    var regEvent=function(node, event, func){
        if (node.addEventListener)
            node.addEventListener(event, func);
        else if (node.attachEvent)
            node.attachEvent("on" + event, func);
        else
            node["on" + event] = func;
    };
    function regValue(id,i){
        var flag=false,
        input=document.getElementById(id),
        value=input.value;
        switch (id){
            case "name":
                flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="name";
                break;
            case "phone":
                flag=/^((\(\d{2,3}\))|(\d{3}\-))?1[3,8,5]{1}\d{9}$/.test(value);
                id="phone";
                break;
            case "tousu":
                flag=/^\S{6,}$/.test(value));
                id="tousu";
                break;
            default:
                break;
        }
        if(flag) {
            index=0;
            input.className="right input";
            hint[i].className="hint hint_right";
            hint[i].innerHTML=hintText[id].right;
        }else{
            input.className="wrong input";
            hint[i].className="hint hint_wrong";
            hint[i].innerHTML=hintText[id].wrong;
            index=1;
        }
    };
    var inputs=document.getElementsByClassName("input"),
    id,
    hint=document.getElementsByClassName("hint"),
    index=0;
    for(var j=0;j<inputs.length;j++){
        (function(i){
            regEvent(inputs[i],"focus",function(){
                hint[i].style.visibility="visible";
                id=inputs[i].id;
            });
            regEvent(inputs[i],"blur",function(){
               regValue(id,i);
            });
        })(j)
    }
    regEvent(document.getElementById("submit"),"click",function(e){
        if(index!==0){
            alert(index)
            e.preventDefault();
            alert("您的输入有误，请检查并重新输入！");
            return false;
        }else{
            $.ajax({
            url: "/statics/aist/pinpai/js/ajax_addgook.php",
            type: "GET",            
            data: {
                name:$("#name").val(),
                phone:$("#phone").val(),
                tousu:$("#tousu").val()
            },
            dataType: 'json',
            success: function(data) {
                if(data.status==true){
                    alert("提交成功");
                }else{
                    alert(data.msg);
                     }

                }
            });    
        } 
        
    });   
})();