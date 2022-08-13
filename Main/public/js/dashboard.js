const newFormHandler = async (event) => {
    event.preventDefault()

    const title = document.getElementById('post-title').value.trim()
    const content = document.getElementById('post-content').value.trim()
    const dateCreated = document.getElementById('post-date').value.trim()

    if(title && content && dateCreated) {
        const response = await fetch(`api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content, dateCreated }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if(response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to create post')
        }
    }
}

const deletebuttonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        })

        if(response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to delete post')
        }
    }
}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.project-list')
    .addEventListener('click', deletebuttonHandler);