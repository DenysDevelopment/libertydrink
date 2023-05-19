<?php

$name = $_POST['name'];
$tel = $_POST['tel'];


// $url = "https://www.google.com/recaptcha/api/siteverify";
// $key = "6Leq6ngiAAAAAJiZuTCNr7dUcZpX0iiP2yGhagEh";
// $query = $url.'?secret='.$key.'&response='.$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR'];

// if(!$_POST['g-recaptcha-response']) {
//   header("Location: /#form");
//   $_SESSION['recaptcha'] = 'captcha nie przeszedł';
//   exit();
// }

// $data = json_decode(file_get_contents($query));
// if($data->success == false) {
//   header("Location: /#form");
//   $_SESSION['recaptcha'] = 'captcha nie przeszedł';
//   exit();
// }

// $_SESSION['recaptcha'] = "";
$token = "6104129284:AAFipoGXRqfbDSYWPsc4JvHUgCK3gaDAFqc";
$chat_id = "-993759317";
// $arr = array(
//   '<b>Imię:</b> ' => $name,
//   '<b>Tel:</b> ' => $tel,
//   '<b>Email:</b> ' => $email,
//   '<b>Сфера вашей занятости:</b> ' => $place,
//   '<b>Город проживания:</b> ' => $city,
//   '<b>Ссылка на профиль:</b> ' => $link,
//   '<b>Расскажите о вашей идее:</b> ' => $desc,
//   '<b>Откуда вы узнали о нашем фонде?:</b> ' => $find,
//   '<b>Принимаю:</b> ' => $privateField,
//   '<b>Личный сбор:</b> ' => $mon,
// );

// $type = $_POST['type'];

$arr = array(
  '<i>Імя</i>' =>   $name,
  'Трубка мобільна: ' => $tel,

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
