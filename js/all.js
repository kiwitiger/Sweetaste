$(document).ready(function () {
    // Remove Modal
    $('#removeModal').on('show.bs.modal', function (event) {
        let btn = $(event.relatedTarget);
        let title = btn.data('title');
        let modal = $(this);
        modal.find('.modal-title').text('確認刪除 ' + title);
    });
    // Minus Cart Number
    $('.btn-minus').on('click', function () {
        let input = $(this).parent().next('input');
        let value = parseInt(input.val());
        if (value <= 1) return;
        value -= 1;
        input.val(value);
    });
    // Add Cart Number
    $('.btn-add').on('click', function () {
        let input = $(this).parent().prev('input');
        let value = parseInt(input.val());
        value += 1;
        input.val(value);
    });
});