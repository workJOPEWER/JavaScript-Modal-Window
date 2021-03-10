//отвечает за приложение.

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



