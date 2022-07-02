var imgs = [
'img1.png ','img2.jpg','img7.jpg','img4.jpg','img5.jpg','img6.jpg',
]
var game = document.getElementById('game');
 var divs= document.getElementsByTagName('div');
 var wrong= new Audio ('wrong.mp3')
 var right= new Audio ('right.mp3')

function call(){
    for(var i=0;i<imgs.length;i++)
{
   game.innerHTML +='<div><img src="'+imgs[i]+'"></div>';
}
}
call();
call();
   //اهندل click div
 var show= true;
 var arr=[];

for(var i=0;i<divs.length;i++){
      divs[i].addEventListener('click',function(){
          if(show){
         this.firstChild.style.opacity= '1';
          if(arr.length==0){
              arr[0]=this;
          }else if (arr.length==1){
              arr[1]=this;
          }
          if(arr.length==2){
              show=false;
            setTimeout(chick,200);
             }
          }else{
              return;
          }
      })
    }
            function chick(){
                  if(arr[0].firstChild.getAttribute('src') === arr[1].firstChild.getAttribute('src')){
                   right.play();
              }else{
                arr[0].firstChild. style.opacity= '0';
                arr[1].firstChild. style.opacity= '0';
                 wrong.play();
              }
               arr=[];
            show=true;
            }




         