//обращаюсь к объекту -> хочу создать метод confirm
//-> ктр будет являться функцией -> передаем набор options
$.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false,
            content: options.content,
            onClose() {
                modal.destroy()
            },
            footerButtons: [
                {
                    text: 'Отменить', type: 'secondary', handler() {
                        modal.close()
                        reject() // отмена
                    }
                },
                {
                    text: 'Удалить', type: 'danger', handler() {
                        modal.close()
                        resolve() //потвердить
                    }
                }
            ]
        })

        //animation
        setTimeout(() => modal.open(), 100)
    })
}