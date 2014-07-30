$(".videoWrapper").html(function() {

        //Create the array with the video identifiers.
        var numbers = [
        'Ig-DbfPoz3o',
        'estPhyfBGho',
        '6JL4hpnZklk',
        'WpXfQMFR_Qs',
        'JtxQT7aVDeg',
        'eSCvCAC7Q-c',
        ];

        function arrayShuffle () {
           var i = this.length, j, temp;
           if ( i === 0 ) return false;
           while ( --i ) {
              j = Math.floor( Math.random() * ( i + 1 ) );
              temp = this[i];
              this[i] = this[j]; 
              this[j] = temp;
           }
        }

        Array.prototype.shuffle = arrayShuffle;

            numbers.shuffle();
            var consoleLine = '<div class=\"col-sm-2\"></div>';
     
    
    /*console = {
        log: function (text) {
            $("#console-log").append($(consoleLine).html(text));
        }
    };*/

    document.write('<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + numbers.pop() + '" frameborder="0" allowfullscreen></iframe>');
    document.write('<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + numbers.pop() + '" frameborder="0" allowfullscreen></iframe>');
    document.write('<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + numbers.pop() + '" frameborder="0" allowfullscreen></iframe>');
    document.write('<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + numbers.pop() + '" frameborder="0" allowfullscreen></iframe>');
    document.write('<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + numbers.pop() + '" frameborder="0" allowfullscreen></iframe>');
    document.write('<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + numbers.pop() + '" frameborder="0" allowfullscreen></iframe>');
}
);

/*$(".videoWrapper").html(function(){*/

/*    var videoArray = [
    'Ig-DbfPoz3o',
    'estPhyfBGho',
    '6JL4hpnZklk',
    'WpXfQMFR_Qs',
    'JtxQT7aVDeg',
    'eSCvCAC7Q-c',
    ];

    var indicesArray = [0, 1, 2, 3, 4, 5];

    var index = Math.ceil(Math.random() * indicesArray.length - 1);
    var html='<iframe width="840px" height="480px" src="http://www.youtube.com/embed/' + videoArray[index] + '" frameborder="0" allowfullscreen></iframe>' + document.write(index);
    //removeItemFromArray();
    return html;
}
);*/
