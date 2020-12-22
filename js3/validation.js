/* Form Validation (Given JS) */

const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];
           
  function initValidation(formName) {
  
    let $form = $(formName);
    let seededID = 5
  
    $(':input').change(function(ev){
      validateForm();
      if(!this.checkValidity())
        $(this).addClass("was-validated")
  
      //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
      //than the whole form at once
    });
    
    $("#visitorForm").submit(function(event){
      $form = $("#visitorForm");
      formEl=$form.get(0);
  
      event.preventDefault();  //prevent default browser submit
      event.stopPropagation(); //stop event bubbling
  
      validateForm();
  
      if (!formEl.checkValidity()){
        $(":input").addClass("was-validated")
      }
      else{
        $("#congrats").css("display", "block");
        $("#visitorForm").css("display", "none");

                let submission = new visitor( //id, firstName, lastName, address, city, state, postal, email, phone, comments
                  seededID,
                  $("#first-name").val(),
                  $("#last-name").val(),
                  $("#address").val(),
                  $("#city").val(),
                  $("#state").val(),
                  $("#zip").val(),
                  $("#email").val(),
                  $("#phone").val(),
                  $("#comment").val()            
        )
        
        modelAddVisitor(submission);
        
        seededID++;
        
      }
     
  
    });
  }
  
  function validateForm() {
    
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    
    //note, to validate the group, just passing in id of one of them, we will use name to check status of group
    validateCheckboxGroup("#other", "you must select at least one!");
 
  }

  function validateState(id, msg){
    $el = $(id);
    let valid=false;
    let inputState = $el.val();

    valid = stateAbbreviations.includes(inputState.toUpperCase());
    setElementValidity(id, valid, msg);
  }
  
  function validateCheckboxGroup(fieldName, message) {
    let valid=false;
    
    let $fields = document.querySelectorAll("[name='find-page']");

    $fields.forEach(function (item, index) {
        if (item.checked) {
            valid = true;
        };
    });
    
    setElementValidity(fieldName, valid, message);
  }
  
  function setElementValidity(fieldName, valid, message){
    let $field=$(fieldName);
    let el = $field.get(0);
    if (valid) {  //it has a value
  
      el.setCustomValidity('');  //sets to no error message and field is valid
    } else {
  
      el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
     
    }
  }
