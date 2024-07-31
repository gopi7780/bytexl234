function formvalidation()
{
    var jsuname=document.kanna.username;
    var jsage=document.kanna.uage;
    var jspin=document.kanna.pin;
    var jspan=document.kanna.pan;
    var jspassid=document.kanna.passid;
    var jsphno=document.kanna.phno;

    if(user_validation(jsuname,8,10))
    {
        if(age_validtion(jsage,0,99))
        {
            if(pin_validation(jspin,6))
            {
                if(pan_validation(jspan,10))
                {
                    if(password_validation(jspassid))
                    {
                        if(phoneno_validation( jsphno))
                        {

                        }
                    }
                }
            }
        }
    }
    return false
}
function user_validation( jsname,mx,my)
{
    var name = jsname.value.length;
if (name == 0 || name >= my || name < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
jsname.focus();
return false;
}
return true;
}
function()
