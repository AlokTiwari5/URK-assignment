
function showMessage() {
  const messageContainer = document.getElementById('message-container');
  const newMessage = document.createElement('div');
  newMessage.className = 'message';
  newMessage.textContent = 'Required field Zip File of your Code is empty';
  messageContainer.appendChild(newMessage);
  messageContainer.style.display = 'block';


  setTimeout(() => {
    messageContainer.removeChild(newMessage);
  }, 3000);
  
}


function removeMessage(cancelIcon) {
  const messageToRemove = cancelIcon.parentElement;
  messageToRemove.remove();
}

