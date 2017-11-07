// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form
// 2. Associate the above submit event with a function, handleSubmit, which should do the following:
// 3: Remember to prevent the default action on the form - hint: event.preventDefault()
// 4: Create a variable to store the user input from #newEntry
// 5: Remember to call parseFloat() on this variable! It needs to be a number.
// 6: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 7: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 8: Empty the input in #newEntry (clear it out)

var total = 0

$('#entry').submit(handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	var newAmount = $('#newEntry').val()
	var newAmountNum = parseFloat(newAmount)
	$('#entries').append('<tr><td></td><td>' + newAmountNum + '</td></tr>')
	total = total + newAmountNum
	$('#total').html('$' + total)
	$('#newEntry').val('')
}

$(document).on('keypress', function(e) {
	if (e.which === 13) {
		handleSubmit()
	}
})
