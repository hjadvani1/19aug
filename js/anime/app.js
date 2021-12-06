// const list = document.querySelectorAll('p')

// list    .forEach(function (paragraph) {
//     if (paragraph.textContent.includes('one')) {
//         paragraph.remove()
//     }
// })


const animes = [
    {
        title: 'attack on titan',
        body: 'best anime ever',
        watch: true
    },
    {
        title: 'naruto',
        body: 'best character development',
        watch: true

    },
    {
        title: 'one piece',
        body: 'best world develop',
        watch: false
    }
]

// const watch_anime = animes.filter((anime) => {
//     return anime.watch
// })


// const summary = document.createElement('h2')
// summary.textContent = `You  watched ${watch_anime.length} animes`
// document.querySelector('body').appendChild(summary)


// animes.forEach(function (anime) {
//     const p = document.createElement('p');
//     p.textContent = anime.title;
//     document.querySelector('body').appendChild(p);
// })

// document.querySelector('button').addEventListener('click', function (e) {
//     console.log('Add a new anime')
// })

const search = {
    searchText: ''
}

const renderanime = function (animes, searches) {
    const filteredanimes = animes.filter(function (anime) {
        return anime.title.includes(searches.searchText)
    })

    document.querySelector('#animes').innerHTML = ''

    filteredanimes.forEach(function (anime) {
        const anime1 = document.createElement('p')
        anime1.textContent = anime.title
        document.querySelector('#animes').appendChild(anime1)
    })
}

renderanime(animes, search)

document.querySelector('#add_anime').addEventListener('click', function (e) {
    e.target.textContent = 'new anime added'
})

document.querySelector('#remove_anime').addEventListener('click', function () {
    document.querySelectorAll('.anime').forEach(function (anime) {
        anime.remove()
    })
})

document.querySelector('#search_anime').addEventListener('input', function (e) {
    console.log(e.target.value)
    renderanime(animes, search)
})