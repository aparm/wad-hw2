$(function() {
    $.get("res/json/posts.json", function(posts) {
        for (post of posts) {
            let div = $('<div class= "post">');


            let divPostInfo = $('<div class= "post-info">');

            let authorPhoto = null;
            if (post.authorPhoto != null) {
                authorPhoto = $('<img class="post-author-photo" src="' + post.authorPhoto + '">');
            } else {
                authorPhoto = $('<img class="post-author-photo" src="res/img/user.png">');
            }

            let date = $('<p class="date">').text(post.date);

            divPostInfo.append(authorPhoto);
            divPostInfo.append(date);


            let image = null;
            if (post.image != null) {
                image = $('<img class="post-image" src="' + post.image + '">');
            }

            let text = $('<p class="post-text">').text(post.text);
            let like = $('<button class="like-button">');


            div.append(divPostInfo);
            if (image != null) {
                div.append(image);
            }
            div.append(text);
            div.append(like);


            $('.main-container').append(div)
        }
    })
});