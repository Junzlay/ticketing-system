$(document).ready(function () {
  $(".change").val("Php "+parseFloat(0).toFixed(2));
  $(".total").val("Php "+parseFloat(0).toFixed(2));
  $(".price").val(0);

  function getTotal() {
    $quantity =$.trim($(".quantity").val()) != "" && !isNaN($(".quantity").val()) ? parseFloat($(".quantity").val()) : 0;
    $cash = $.trim($(".cash").val()) != "" && !isNaN($(".cash").val()) ? parseFloat($(".cash").val()) : 0;
    $(".total").val("Php "+parseFloat($quantity * ($(".price").val())).toFixed(2));
    $(".change").val("Php "+parseFloat($cash - $quantity * ($(".price").val())).toFixed(2));
  }

  window.getTicket = function (movie) {
    switch (movie.value) {
      case "lie":
        $(".bg-image").css({ "background-image": " url('img/lie-april.jpg')" });
        $(".price").val(700);
        break;
      case "demon":
        $(".bg-image").css({ "background-image": "url('img/demon.jpg')" });
        $(".price").val(500);
        break;
      case "violet":
        $(".bg-image").css({ "background-image": "url('img/violet.jpg')" });
        $(".price").val(650);
        break;
      case "onepiece":
        $(".bg-image").css({ "background-image": "url('img/onepiece.jpg')" });
        $(".price").val(780);
        break;
      case "hunter":
        $(".bg-image").css({ "background-image": "url('img/hunter.jpg')" });
        $(".price").val(400);
        break;
    }
    getTotal();
  };

  $(".holder").keyup(function () {
    getTotal();
  });
});
