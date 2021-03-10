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
const toHTML = books => `
<div class="col">
            <div class="card" style="width: 18rem;">
                <img style="width: 100%" src="${books.img}" class="card-img-top" alt="${books.title}">
                <div class="card-body">
                    <h5 class="card-title">${books.title}</h5>
                    <p class="card-text">Погружение в тему DevOps – это тот путь, который потребует от вас постоянного самосовершенствования и изучения новых технологий.</p>
                    <a href="#" class="btn btn-primary">Узнать больше</a>
                    <a href="#" class="btn btn-danger">Удалить</a>
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

const modal = $.modal({
    title: 'Jopewer Modal Window',
    closable: true,
    content: `
    <p>Практика - это материальная, чувствнно предметная целенаправленная деятельность людей, 
    имеющая своим содержанием освоение и преобразов прир и социальных объектов и составляющая 
    всеобщую основу, движ силу развития челов общества и познания.</p>
    `,
    width: '400px',
    footerButtons: [
        {
            text: 'Ok', type: 'primary', handler() {
                console.log('primary btn clicked')
                modal.close()
            }
        },
        {
            text: 'Cancel', type: 'danger', handler() {
                console.log('danger btn clicked')
                modal.close()
            }
        }
    ]
});



