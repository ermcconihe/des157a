(function(){
    'use strict';
    console.log('reading js');

    const text = document.querySelector('#text-section');
    const observer = new IntersectionObserver(callBack, {threshold: 1} );

    // for(const eachText of text){
    //     observer.observe(eachText);
    // }

    text.forEach(function(eachText){
        observer.observe(eachText);
    });

    function callBack(entries){
        entries.forEach( function(eachEntry){
            if(eachEntry.isIntersecting){
                eachEntry.target.className = "show";
            } else {
                eachEntry.target.removeAttribute('class');
            }
        });
    };
    

})();