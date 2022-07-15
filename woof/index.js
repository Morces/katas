let hearts = document.getElementById("like-count");
let count = 0;

function like(){
    count+=1;
    hearts.innerHTML = count + 'likes';
}


var comment = document.querySelector('#comment');

var submit = document.querySelector('.comment-button');

var commentSection = document.querySelector('.comments');


function postComment(e){
  e.preventDefault();
  
  var li = document.createElement('li');
  var text = document.createTextNode(comment.value);
  if(comment.value !== ""){
     li.appendChild(text);
  li.classList.add('comment-style');
  document.body.appendChild(li);
  } else {
    alert("Please type something in the comment box!")
   }
 
  
}

submit.addEventListener('click', postComment);





