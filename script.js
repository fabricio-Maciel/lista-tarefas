//Todo conteúdo Jquery deve estar aqui dentro para funcionar, pois o jQuery só carrega se todo o document estiver pronto.
$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const novaTarefa = $("input").val();
    $(`<li>${novaTarefa}</li>`).appendTo("#lista");

    $(novaTarefa).val("");
  });

  $("#lista").on("click", "li", function () {
    $(this).toggleClass("tarefa-feita");
  });
});
