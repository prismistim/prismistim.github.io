$(function() {
    $.getJSON("../data/profile.json", function(data) {
        var myinfo = "";
        var school = "";
        $('#roma-name').html(data.roma_name);
        $('#username').html(data.username);

        $('#job').html(data.job);
        $('#birth').html(data.birth);
        $('#location').html(data.location);

        for(var x = 0; x < data.school.length; x++) {
            school += '<div class="school-li">';
            school += '<div class="grade">' + data.school[x].grade + '</div>';
            school += '<div class="school-name">' + data.school[x].school_name + '</div>';
            school += '<div class="school-dep">' + data.school[x].department + '</div>';
            school += '<div class="school-year">' + data.school[x].year + '</div></div>';
        }
        $('#schoolist').append(school);
        
        $('#interesting').html(data.interesting);
        $('#language').html(data.programming.lang);
        $('#library').html(data.programming.lib);
        
        $('#description').html(data.description);
    });

    $.getJSON("../data/product.json", function(data) {
        var product = "";

        for(var i = 0; i < data.length; i++) {
            product += '<div class="box">';
            product += '<img class="inbox-img" src="' + data[i].img + '">';
            product += '<h3 class="sub-section">' + data[i].title + '</h3>';
            product += '<p class="description">' + data[i].description + '</p>';
            
            if(data[i].works != null){
                product += '<h4 class="subtitle">やったこと</h4><ul>';
                for(var j = 0; j < data[i].works.length; j++) {
                   product += '<li class="works-list">' + data[i].works[j] + '</li>'; 
                }
                product += '</ul>';
            }

            if(data[i].use != null){
                product += '<h4 class="subtitle">つかったもの</h4><ul>';
                for(var j = 0; j < data[i].use.length; j++) {
                   product += '<li class="works-list">' + data[i].use[j] + '</li>'; 
                }
                product += '</ul>';
            }

            product += '<h4 class="subtitle">制作期間</h4>';
            product += '<div class="date">' + data[i].date + '</div>';
            product += '<h4 class="subtitle">制作物リンク</h4>'
            for(var k = 0; k < data[i].links.length; k++) {
                product += '<a class="link-btn" href="' + data[i].links[k].url + '" target="blank">' + data[i].links[k].title + '</a>';
            }
            product += '</div>';
        }
        $('#product-all').append(product);
        
    });
});