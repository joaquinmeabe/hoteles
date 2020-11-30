$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
      interval: 5000
    });

    $('#reservar').on('show.bs.modal', function (e){
      console.log('El modal se esta mostrando');

        $('#reservarBtn').removeClass('btn-primary');
        $('#reservarBtn').addClass('btn-secondary');
        $('#reservarBtn').prop('disabled', true);

    });
    $('#reservar').on('shown.bs.modal', function (e){
      console.log('El modal se mostró');
    });
    $('#reservar').on('hide.bs.modal', function (e){
      console.log('El modal se oculta');
    });
    $('#reservar').on('hidden.bs.modal', function (e){
      console.log('El modal se ocultó');
        $('#reservarBtn').removeClass('btn-secondary');
        $('#reservarBtn').addClass('btn-primary');
        $('#reservarBtn').prop('disabled', false);
    });

  });