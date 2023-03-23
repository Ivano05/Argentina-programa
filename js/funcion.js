var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('Carta de presentacion - Ivan.pdf');
});

$("a").on("click", function () {
    $(".tarjetacontenedor").removeClass("show");
  });