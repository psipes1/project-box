var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80)",
        "url(https://images.unsplash.com/photo-1532511555597-18d77974461a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1472&q=80)",
        "url(https://images.unsplash.com/photo-1485119502162-016e4409beab?auto=format&fit=crop&w=1500&q=80)"
        
      ];
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 3000);


