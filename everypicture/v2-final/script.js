(function(){
    'use strict';
    console.log('reading js')

    // variable to select the top image
    const topImages = document.querySelectorAll('.top');

    // for of loop to target each of the two actions, also how to deal with many of the same item
    for( const eachTop of topImages){
        //targets image change on mouseover
        eachTop.addEventListener( 'mouseover', function(event){
            //console.log('over top');
            const thisPicture = event.target;
            //console.log(thisPicture.id);
            thisPicture.className = 'top fadeout';

        } );

        //targets image change on mouseout
        eachTop.addEventListener( 'mouseout', function(event){
            //console.log('over top');
            const thisPicture = event.target;
            //console.log(thisPicture.id);
            thisPicture.className = 'top fadein';

        } );
    }






    
    



})();

