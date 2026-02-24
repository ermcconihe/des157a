(function(){
    'use strict';
    console.log('reading js')

    const topImages = document.querySelectorAll('.top');
    // const bottomImage = document.querySelector('.bottom');
    //const layering = document.querySelectorAll('.cell');

    for( const eachTop of topImages){
        eachTop.addEventListener( 'mouseover', function(event){
            //console.log('over top');
            const thisPicture = event.target;
            //console.log(thisPicture.id);
            thisPicture.className = 'top fadeout';

        } );

        eachTop.addEventListener( 'mouseout', function(event){
            //console.log('over top');
            const thisPicture = event.target;
            //console.log(thisPicture.id);
            thisPicture.className = 'top fadein';

        } );
    }






    
    



})();

