const dashboardHandler = async (event) => {
    event.preventDefault()
    document.location.replace('/dashboard')
}

const homepageHandler = async (event) => {
    event.preventDefault()
    document.location.replace('/')
}

document.getElementById('dashButton').addEventListener('click', dashboardHandler)
document.getElementById('homeButton').addEventListener('click', homepageHandler)