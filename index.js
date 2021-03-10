//отвечает за приложение.
const books = [
    {
        id: 1,
        title: 'Kниги по DevOps',
        description: 'Погружение в тему DevOps – это тот путь, который потребует от вас постоянного самосовершенствования и изучения новых технологий.',
        img: 'https://rebrainme.com/blog/wp-content/uploads/2020/05/devops_books.jpg'
    },
    {
        id: 2,
        title: 'Kниги по IT-бизнес',
        description: 'Кто стоит за быстрорастущей отраслью, кто ее создает, вкладывает в нее деньги? Кто и как ошибался, прежде чем заработал миллионы? ',
        img: 'https://eimg.pravda.com/images/doc/2/a/2a83f87-knigi-1542.jpg'
    },
    {
        id: 3,
        title: 'Kниги которые не нужно читать',
        description: '«Всю нашу жизнь нам говорили, что мы можем считаться начитанными, только если прочитали Великие Книги. Мы правда пытались, но в какой-то момент осознали, что не все Великие Книги пережили своё время. Некоторые из них расистские, другие – сексистские, но большинство просто очень, очень скучные»',
        img: 'https://r5.readrate.com/img/pictures/basic/752/752781/7527813/w585h345-crop-stretch-02d11873.jpg'
    }
]

//метод toHTML преобразовывает объект books
// преодразовывает в строку -шаблон карты
const toHTML = book => `
<div class="col">
            <div class="card" style="width: 18rem;">
                <img style="width: 100%; height: 200px;" src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="description" data-id="${book.id}">Узнать больше</a>
                    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${book.id}">Удалить</a>
                </div>
            </div>
        </div>
`

function render() {
    // const html = books.map( book => toHTML(book))
    const html = books.map(toHTML).join('')
    document.querySelector('#books').innerHTML = html
}

render()

const descriptionModal = $.modal({
    title: 'Описание книги',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Закрыть', type: 'primary', handler() {
                descriptionModal.close()
            }
        }
    ]
});

const confirmModal = $.modal({
    title: 'Вы уверены?',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Отменить', type: 'secondary', handler() {
                confirmModal.close()
            }
        },
        {
            text: 'Удалить', type: 'danger', handler() {
                confirmModal.close()
            }
        }
    ]
});

document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn

    //строку преобразуем к числу +
    const id = +event.target.dataset.id

    //доступно только для кнопок
    const book = books.find(b => b.id === id)

    if (btnType === 'description') {
        descriptionModal.setContent(`
        <p>Описание: <i>${book.description}</i></p>
        `)
        descriptionModal.open()
    } else if (btnType === 'remove') {
        confirmModal.setContent(`
        <p>Вы удаляете книги: <strong>${book.title}</strong></p>
        `)
        confirmModal.open()
    }
})

