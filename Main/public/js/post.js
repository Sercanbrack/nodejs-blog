const newCommentHandler = async (event) => {
    event.preventDefault()

    const content = document.getElementById('commentText').value.trim()

    if(content) {
        const response = await fetch(`api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if(response.ok) {
            document.location.replace('/post')
            console.log('comment left!')
        } else {
            alert('Failed to leave comment')
        }
    }
}

const deleteCommentHandler = async (event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        })

        if(response.ok) {
            document.location.replace('/post')
        } else {
            alert('Failed to delete comment')
        }
    }
}

document
    .querySelector('#commentButton')
    .addEventListener('submit', newCommentHandler);

document
    .querySelector('.button-delete')
    .addEventListener('click', deleteCommentHandler);