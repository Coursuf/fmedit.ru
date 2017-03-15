<!--
function snlinks_popup(o,e){
if(!o)return;
e=e||window.event;
var u=o.getAttribute('u');
var t=o.getAttribute('t');
var d=document.getElementById('share-div');
if(!d)
{
 d=document.createElement('div');
 d.id="share-div";
 document.body.appendChild(d);
 d.style.display="none";
}
if(d.style.display!="none"&&d.o==o)
{
 d.style.display="none";
 return false;
}
d.style.display="none";
d.parentNode.removeChild(d);
o.parentNode.insertBefore(d,o);
d.innerHTML='<a href="http://vkontakte.ru/share.php?url='+u+'&title='+t+'" title="Поделиться ссылкой в ВКонтакте" onclick="window.open(this.href,\'Поделиться ссылкой в ВКонтакте\',\'width=600,height=300\');return false" class="spr v"></a><a href="http://twitter.com/home/?status='+u+'+'+t+'" title="Поделиться ссылкой в Twitter" target="_blank" class="spr t"></a><a href="http://www.facebook.com/sharer.php?u='+u+'" title="Поделиться ссылкой в Facebook" onclick="window.open(this.href,\'Поделиться ссылкой в Facebook\',\'width=800,height=300\');return false;" class="spr f"></a>';
d.style.display="";
d.o=o;
return false;
}
function snlinks(u,t){
t=encodeURIComponent(t);
document.write('<a href="#" title="Поделиться ссылкой" onclick="return snlinks_popup(this);" u="'+u+'" t="'+t+'" class="spr share"></a>');
}
//-->