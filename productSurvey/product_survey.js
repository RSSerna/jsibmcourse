


const submitButton=document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

function submitFeedback() {
    alert('Thank you for your valuable feedback')
    document.getElementById('userName').innerHTML = document.getElementById('name').value;
    document.getElementById('userAge').innerHTML = document.getElementById('age').value;
    document.getElementById('userEmail').innerHTML = document.getElementById('email').value;
    document.getElementById('userJob').innerHTML = document.getElementById('job').value;
    document.getElementById('userDesignation').innerHTML = document.getElementById('designation').value;
    document.getElementById('userProductChoice').innerHTML = document.getElementById('productType').value;
    document.getElementById('userFeedback').innerHTML = document.getElementById('feedbackText').value;
    document.getElementById('userExperince').innerHTML = document.getElementById('userExperinceText').value;

    document.getElementById('userInfo').style.display = 'block';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });