// use document ready event to make sure elements exists
        $("#video").html(function(){
            var videoArray = [
                'Ig-DbfPoz3o',
                'estPhyfBGho',
                '6JL4hpnZklk',
                'WpXfQMFR_Qs',
                'JtxQT7aVDeg',
                'eSCvCAC7Q-c',

            ];
            var index=Math.floor(Math.random() * videoArray.length);
            var html='<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + videoArray[index] + '" frameborder="0" allowfullscreen></iframe>';
            return html;
        });
