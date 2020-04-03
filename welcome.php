<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="css/compstyle.css">
  <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
  <title></title>
</head>
<body>
  <div class="submission_wrapper">
    <p id ="make_big">SUBMITTED!</p>
    <p>here is what you wrote</p>
    <div id ="php_things">title:<p> <?php echo $_POST["form_title"]; ?></p><br>
    content:<p><?php echo $_POST["form_content"]; ?></p>
    </div>
    <a href="landingpageB.html">&#171;see what other people contributed&#187;</a>
    <a href="landingpage.html">&#171;back to homepage&#187;</a>
  </div>

  <?php
    $file = fopen("scripts/user_data.json","r+");
    $txt = array(
        'form_title' => $_POST["form_title"],
        'form_content'=> $_POST["form_content"]
    );
    if ($file){
        fseek($file, 0, SEEK_END);
        if (ftell($file) > 0){
            fseek($file, -1, SEEK_END);
            fwrite($file, ",\n", 2);
            fwrite($file, json_encode($txt,JSON_PRETTY_PRINT) . ']');
          }else{
            fwrite($file, json_encode(array($txt),JSON_PRETTY_PRINT));
          }
        fclose($file);
    }
  ?>
</body>
</html>
