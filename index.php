<!DOCTYPE html>
<html>

  <head>

    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">

  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link href="style.css" rel="stylesheet" type="text/css" />
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="jquery.js"></script>
        
  </head>

<body>

        <div id="json_div" class="Absolute-Cente"> <span id="sending" class="bg-warning"> sending... </span> </div>
        
	<for method="pos" enctype="multipart/form-data" id="idea_capture_form" class="Absolute-Center is-Responsive well well-sm ">
                
                <h4 class="text-center"> Idea Capture </h4>
                
  		<div class="form-group">
    			<label for="email">Email address:</label>
    			<input type="email" class="form-control" id="email">
  		</div>

  		<div class="form-group">
    			<label for="idea_title">Idea Title:</label>
    			<input type="text" class="form-control" id="idea_title">
  		</div>


  		<div class="form-group">
    			<label for="idea_description">Idea Description:</label>
    			<textarea  class="form-control" rows="5" id="idea_description"></textarea>
  		</div>

		<div class="form-group">
    			<label for="idea_category">Idea Category:</label>
    			<select  class="form-control" id="idea_category">
				
				<option value="0"> Incremental </option>
				<option value="1"> Disruptive </option>
				<option value="2"> Radical </option>

			</select>
  		</div>

		<div class="form-group">
    			<label for="idea_image">Idea Image:</label>
    			<input type="file" class="form-control" id="idea_image" />
  		</div>

		<div class="form-group">
    			<label for="idea_privacy">Idea Privacy:</label>
  			<input type="radio" name="privacy" value="1" class="radio-inline">Private
  			<input type="radio" name="privacy" value="2" class="radio-inline">Public
		</div>

		<div class="form-group">
    			<label for="TsCs">Terms & Conditions Acceptance:</label>
    			<input type="checkbox" value="1" id="TsCs" class="checkbox-inline"/> Accept TsCs
  		</div>
                
                <div id="p" class="bg-warning"></div>
                
                <button class=" btn btn-primary btn-md pull-right " id="submit_idea_capture_form" > Submit </button>
                  
               
	</form>

        
</body>
	
</html>
