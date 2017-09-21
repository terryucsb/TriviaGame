// counters for results and total time

var count = 60;

var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

// trivia game functions

$(document).ready(function(){

	// fixed scroll adjustment

	window.scrollTo(0,500);

	//stop after 60seconds
	//hide game questions and results until start

	$("#game_container").hide();
	$("#end_container").hide();

	// hide start button after click and show questions
	 $("#start_button").on("click", function(){

	 	$("#start_container").hide();

	 	$("#game_container").show();

	 // start the timer
	 	startCountdown();
	 	return;

	 console.log(this);
});

// countdown function - 1 sec decrement

function startCountdown(){

	setInterval(countdown, 1000);
}


	 //display timer and countdown from 60
function countdown(){
	count--;
	$("#timer_number").html(count + " seconds ");

	$("#done_button").on("click", function(){
	count = 0;
	return;
	console.log(this);

	});


	// when timer is over pause game
	if (count == -1) {
		timeUp();
		$("#game_container").hide();
	}

}


// checking the answers of questions
function timeUp(){

	var Q1 = $('input:radio[name="q1"]:checked').val();		
	var Q2 = $('input:radio[name="q2"]:checked').val();
	var Q3 = $('input:radio[name="q3"]:checked').val();
	var Q4 = $('input:radio[name="q4"]:checked').val();
	var Q5 = $('input:radio[name="q5"]:checked').val();
	var Q6 = $('input:radio[name="q6"]:checked').val();
	var Q7 = $('input:radio[name="q7"]:checked').val();
	var Q8 = $('input:radio[name="q8"]:checked').val();
	var Q9 = $('input:radio[name="q9"]:checked').val();
	var Q10 = $('input:radio[name="q10"]:checked').val();

if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Pikachu"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "ProfOak"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "James"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Thunder"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Caterpie"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Brock"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Badges"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Nintendo"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "151"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "HoHo"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		// after filled out show result container

		$("#end_container").show();

		$('#correctAnswers').html(correctCount);
		$('#incorrectAnswers').html(incorrectCount);
		$('#unanswered').html(unansweredCount);


		window.scrollTo(0, 550);

	}

});





