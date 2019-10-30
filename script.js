/* Add your script here */

//Task 1
$('#list').click(function(){

	$.ajax({
		method:'GET',
		url:'http://skeleton.mernbook.com/api/users' ,



	}).done(function(response){
		response.forEach(element => {
			let user = $('<p>').text(element.name)
			$('#users').append(user)

		}).fail(function(response){
			console.log(response)
		})
	})

})

//Task 2
$('#add').click(function(){

	let user = {name:'',email:'',password:''}
	user.name = $('#name').val
	user.email   = $('#email').val
	user.password  = $('#password').val

	$.ajax({
		method:'POST',
		url:'http://skeleton.mernbook.com/api/users' ,
		data : user
		}).done(function(response){

		$('#name').val('')
		$('#name').val('')
		$('#name').val('')
		$('#error').TEXT('User Created')
		console.log("done")

	}).fail(function(response){
		$('#error').text(response.responseJSON.error)
		console.log("failed")
	})



})
