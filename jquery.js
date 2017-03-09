
        /*
         * This function validates email 
         * It must have one @ and .
         */
       function validate_email(e) {
           var reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
           if(!reg.test(e)) {
              return false;
           }else{
              return true;
           }
        }//close validate_email function

        $(document).ready(function(){
            $("#submit_idea_capture_form").click(function(){
                
                /*
                 * 
                 * create variables to get the values of the form fields
                 */
                var email = $("#email").val();
                var idea_title = $("#idea_title").val();
                var idea_description = $("#idea_description").val();
                var idea_category = $("#idea_category").val();
                var idea_privacy = $("input[name=privacy]:checked").val();
                var idea_image = $("#idea_image").val();
                var idea_TsCs = $("#TsCs").val();
                
                /*
                 * 
                 * This variable will display a warning message for empty fields.
                 */
                var empty_field_warning = $("#p");
              
                /*
                 * Check if fields are not empty
                 * if empty, warn user to fill in
                 */
                if( !email || validate_email(email) == false ){
                    
                        $("#email").css({"border":"1px solid red"}) ;
                        empty_field_warning.html(" Please fill in valid email ");
                        
                }else if( !idea_title ){
                    
                        $("#idea_title").css({"border":"1px solid red"}) ;
                        empty_field_warning.html(" Please fill in idea title ");
                        
                }else if( !idea_description ){
                    
                        $("#idea_description").css({"border":"1px solid red"}) ;
                        empty_field_warning.html(" Please fill in idea description ");
                    
                }else if( !idea_category ){
                    
                        $("#idea_category").css({"border":"1px solid red"}) ;
                        empty_field_warning.html(" Please choose a category ");;
                        
                }else if( !$('#TsCs').is(":checked") ){
                    
                        $("#TsCs").css({"border":"1px solid red"}) ;
                        empty_field_warning.html(" Please accept Terms and Conditions ");
                    
                }
                /*
                 *Check if the image is png, jpg or gif only
                 */
                 else if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(idea_image)) {      
                        $("#idea_image").css({"border":"1px solid red"}) ;
                        empty_field_warning.html(" Please only upload png, jpg or gif images. ");
                }
                else{
                /*
                 * Send data using AJAX
                 * Note that there is also a file to be sent
                 */
                var formData = new FormData($(this)[0]);
                   
                $.ajax({
                    url: "https://httpbin.org/post",
                    contentType: "application/json",
                    dataType: "json", 
                    type  : "POST",
                    data:{ email:email, idea_title:idea_title, idea_description:idea_description, idea_category:idea_category, idea_privacy:idea_privacy, idea_image:idea_image, idea_TsCs:idea_TsCs },
                   
                   
                    success: function (data) {
                       
                        /*
                         * display the returned JSON string in a div 
                         */
                        $('#json_div').html(" <h3 class=\"text-center\"> Information about my idea </h3> " + JSON.stringify(data));
                        
                        /*
                         * hide the form
                         */
                        $("#idea_capture_form").css({"display":"none"});
                        
                        
                        /*
                         * because the page has not refreshed remove the warning signs
                         */
                        $("#email").css({"border":"1px solid #CCC"}) ;
                        $("#idea_title").css({"border":"1px solid #CCC"}) ;
                        $("#idea_description").css({"border":"1px solid #CCC"}) ;
                        $("#idea_category").css({"border":"1px solid #CCC"}) ;
                        $("#TsCs").css({"border":"1px solid #CCC"}) ;
                        $("#idea_image").css({"border":"1px solid #CCC"}) ;
                        empty_field_warning.html("");
                         
                        
                    }
                });

                   /*
                    * show user its sending data
                    */
                   $("#sending").css({"display":"block"});
                   
                return false;
                
                    }
    });
});