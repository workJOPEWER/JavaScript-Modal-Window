function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('amodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal Title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Практика - это материальная, чувствнно предметная целенаправленная деятельность людей, имеющая своим содержанием освоение и преобразов прир и социальных объектов и составляющая всеобщую основу, движ силу развития челов общества и познания.</p>
                <p>Практика и познание — две взаимосвязанные стороны единого исторического процесса, но решающую роль здесь играет практическая деятельность.</p>

            </div>
            <div class="modal-footer">
                <button>OK</button>
                <button>CANCEL</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

/*
* title: string
* closable: boolean
* content: string
* width: string ('400px')
* destroy(): void
* window close
* ---------------
* setContent(html: string): void | PUBLIC
* onClose(): void
* onOpen(): void
* beforeClose(): boolean
* --------------
* animate.css
*/

$.modal = function (options) {
    const ANIMATION_SPEED = 200;
    const $modal = _createModal(options)
    let closing = false


    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.add('hide')
                closing = false
            }, ANIMATION_SPEED)

        },
        destroy() {
        }

    }
}