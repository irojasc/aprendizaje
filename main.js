const h1 = document.querySelector('#h2');

/* $(document).ready(function() {
    var url = 'https://rawgithubusercontent.com/irojasc/aprendizaje/main/gn_2109.txt';
    $.get(url, function(data) { 
        $('#code').text(data);
      }, 'text');
}); */

$.get("https://raw.githubusercontent.com/irojasc/aprendizaje/main/gn_2109.txt", function (data, status, textStatus, jqXHR) {  // success callback
        h1.innerText = data;        
});

