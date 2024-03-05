(function(){

    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');
    //upon clicking on the buttons the acton should be shown so for that do
    buttons.forEach(function(button){//this takes the value from the dataset if any button was pressed
        button.addEventListener('click',function(e){
            e.preventDefault();
            let value=e.target.dataset.num;//target the dataset that is num
            screen.value+=value;//if any button pressed then store the data
        })
    });
    equal.addEventListener('click',function(e){
        if(screen.value===''){
            screen.value="";//when the screen is empty then on clicking the equal button it should not show anything 
        }else{
            let answer=eval(screen.value);//evaluate the value which comes on the screen
            screen.value=answer;//our ans will be stored in the ans variable
        }
        
    })
    //making clear button functional
    clear.addEventListener('click',function(e){//when some event occures then it will be active(meaning of function(e))
        screen.value="";//clear button pressed so the screen must be empty

    })
})();