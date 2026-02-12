(function(){
    'read strict'
    console.log('reading js');

    const myForm = document.querySelector('#form');
    const madlib = document.querySelector('#madlib');
    const questions = document.querySelector('#questions');
    const formData = document.querySelectorAll("input[type=text]");
    // const selectData = document.querySelector('select');
    // formData.push(selectData);

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        processFormData(formData);
    });

    function processFormData(formData){
        const words = [];
        const emptyfields =[];
        let counter = 0;

        for (const eachWord of formData) {
            if(eachWord.value){
                words.push(eachWord.value);
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }
        if( emptyfields.length > 0 ){
            showErrors(formData, emptyfields);
        } else {
            makeMadLib(words);
        }
    };

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        // const errorText = `Please fill out this field ${errorId}`;
        // madlib.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    };

    function makeMadLib(words){
        const myText = `You <span>${words[0]}</span> out of the grocery store, just have bagged up your groceries in a <span>${words[1]}</span> bag. It is a beautiful <span>${words[2]}</span> day outside and you get distracted watching a <span>${words[3]}</span> dart along in the distance. What you don’t see is the <span>${words[4]}</span> right in front of you, causing you to trip. Your bag <span>${words[5]}</span> out of your arms and <span>${words[6]}</span>. All <span>${words[7]}</span> of your <span>${words[8]}</span> go absolutely everywhere, causing a scene. Unfortunately for you, you are also on the ground and see the <span>${words[3]}</span> from before laughing at you.`;
    
        madlib.innerHTML = myText;

        madlib.style.display = "block";
        questions.style.display = "none";

        for( const eachField of formData){
            eachField.value = '';
        }
        

    };


})();