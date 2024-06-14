function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentList = document.getElementById('commentList');
        const newComment = document.createElement('li');
        newComment.className = 'comment';
        newComment.textContent = commentText;
        commentList.appendChild(newComment);

        commentInput.value = '';
    } else {
        alert('Por favor, digite um comentário.');
    }
}