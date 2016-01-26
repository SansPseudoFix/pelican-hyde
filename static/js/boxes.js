$(document).ready(function(){
    // attention
	$(".attention").wrapInner("<p class=\"attention-text\"></p>"); // Ajoute la classe attention-text aux p
	$("<i class=\"fa fa-exclamation-triangle attention-icon\"></i>").prependTo(".attention"); // Ajoute l'icone à la div .attention
    // nb
	$(".nb").wrapInner("<p class=\"nb-text\"></p>");
	$("<i class=\"fa fa-info-circle nb-icon\"></i>").prependTo(".nb");
    // edit
    $(".edit").wrapInner("<p class=\"edit-text\"></p>");
	$("<i class=\"fa fa-pencil-square-o edit-icon\"></i>").prependTo(".edit");
    // Git
    $(".git").wrapInner("<p class=\"git-text\"></p>");
	$("<i class=\"fa fa-github-alt git-icon\"></i>").prependTo(".git");
    // Download Zip
    $(".dl-zip").wrapInner("<p class=\"dl-zip-text\"></p>");
	$("<i class=\"fa fa-file-archive-o dl-zip-icon\"></i>").prependTo(".dl-zip");

    // liens
    $(".nb a").css('color','#FFF').css('text-decoration','underline'); // Change la couleur du lien en noir et souligne (sinon, c'est bleu sur fond bleu avec le CSS)
    $(".attention a").css('color','#FFF').css('text-decoration','underline');
    $(".edit a").css('color','#FFF').css('text-decoration','underline');
    $(".git a").css('color','#FFF').css('text-decoration','underline');
    $(".dl-zip a").css('color','#FFF').css('text-decoration','underline');
});
