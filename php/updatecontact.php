<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once'./database.php';
$table='contact';
$data=json_decode(file_get_contents('php://input'));
$id=$data->id;
$name=$data->name;
$phone=$data->phone;
$email=$data->email;
$query='update '.$table.' set name=:name,phone=:phone,email=:email where id=:id';
$stmt=$pdo->prepare($query);
$stmt->bindParam(':name',$name);
$stmt->bindParam(':phone',$phone);
$stmt->bindParam(':email',$email);
$stmt->bindParam(':id',$id);
if($stmt->execute())
{
    $response['message']='Contact updated';
    echo json_encode($response);
}
else
{
    $response['message']='Error occured';
    echo json_encode($response);
}
?>
