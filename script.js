document.getElementById('button').addEventListener('click', what)

function what () {
  const day = document.getElementById('day').value
  const age = document.getElementById('numb').value
  if (day !== 'saturday' && day !== 'sunday') {
    if (age < 18) {
      document.getElementById('answer').innerHTML = 'Time to get ready for school!  '
    } else {
      document.getElementById('answer').innerHTML = 'Your older than 18, you choose what to do with your life!'
    }
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }
}