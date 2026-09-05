let input = getid('input')
function getid(id) {
    let Id = document.getElementById(id)
    return Id
}
function href(href) {
    let dehref = window.location.href
    let dhref = href
    let open = window.open(`${dehref}${dhref}`)
}
function openpa() {
    let ophref = input.value
    href(ophref)
}