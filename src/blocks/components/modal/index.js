import $ from "jquery";

export default class Modal {
    constructor(opts) {
        this.$body = $('body');
        this.$modal = $('#modal');
        // this.$close = this.$modal.find('.modal__close');
        $.extend(this, opts);
    }

    init() {
        $(document).click((e) => this.elementToOpen(e));
        this.close();
    };

    elementToOpen(e) {
        // e.preventDefault();
        e.stopPropagation();

        const $target = $(e.target);
        const $openModal = $target.closest('[data-open]');

        if ($openModal.length) {
            this.openModal();
        } else if (
            $target.hasClass('modal') &&
            this.$body.hasClass('modal-is-open')) {
            this.closeModal();
        } else return;
    }

    close() {
        this.closeModal();
        // this.$close.click(e => this.closeModal(e))
    }

    openModal() {
        this.$body.addClass('modal-is-open');
        this.$modal.parent()
            .fadeIn()
            .css('overflowY', 'auto');
    };

    closeModal() {
        this.$body.removeClass('modal-is-open');
        this.$modal.parent()
            .fadeOut()
            .css('overflowY', 'hidden');
    }
}

