window.onload = function() {

    var slider = document.getElementById('grade-slider'),
        grade = document.getElementById('grade'),
        assessment = document.getElementById('assessment'),
        submitButton = document.getElementById('submit'),
        mouth = Snap.select('#mouth'),
        pathDescription = '',
        yM = 381.329,
        yc1 = yc2 = 0;

    var mouthAnimation = function(sliderValue) {
        yM = (sliderValue * -60) + 381.329;
        yc1 = ((sliderValue * 100) - 50).toFixed(2);
        yc2 = yc1 * -1;

        pathDescription = 'M 127.771,' + yM.toFixed(3) +
                          ' c 0,0 40.860771,' + yc1 + ' 120.770151,' + yc1 +
                          ' c 70.909379,0 120.770152,' + yc2 + ' 120.770152,' + yc2;

        mouth.animate(
            { d: pathDescription},
            1 // this 1ms delay avoid Snap.svg throwing console errors ¯\_(ツ)_/¯
        );
    }

    var resetDemo = function() {
        slider.value = 0.5;
        grade.innerHTML = 0.50;
        assessment.value = '';
        yM = 351.329;
        yc1 = yc2 = 0;

        document.getElementById('mouth')
                .setAttribute('d', 'M 127.771,' + yM +
                              ' c 0,0 40.860771,' + yc1 + ' 120.770151,' + yc1 +
                              ' c 70.909379,0 120.770152,' + yc2 + ' 120.770152,' + yc2);
    }

    slider.addEventListener('input', function() {
        grade.innerHTML = (Math.round(+this.value * 100) / 100).toFixed(2);
        mouthAnimation(this.value);
    })

    submitButton.addEventListener('click', function(e) {

        var assessmentText = '';

        if (assessment.value !== '') {
            assessmentText = '<blockquote class="assessment-text">' +
                                '<strong>Assessment: </strong>' + assessment.value +
                             '</blockquote>';
        }

        swal({
          title: 'Nice Job!',
          text: 'You gave this OKR a grade of <strong>' + slider.value + '</strong>' + assessmentText,
          type: 'success',
          confirmButtonText: 'Awesome!',
          html: true
        }, function(){
            resetDemo();
        });
    })

};

// This demo uses Polybezier Curves (M x,y c c1x,c1y c2x,c2y x,y c c1x,c1y c2x,c2y x,y)

// The different commands are case-sensitive; an upper-case command specifies
// its arguments as absolute positions, while a lower-case command specified
// points relative to the current position.

// The path description (d) attributes used here are:
//      M == Moveto
//      c == Curveto



// The values that morph are underlined with *******

// straight horizontal line (neutral starting state)
// M 127.771,351.329 c 0,0 40.860771,0 120.770151,0 c 70.909379,0 120.770152,0 120.770152,0
//           *******                 *            *                          *            *

// smile
// M 127.771,321.329 c 0,0 40.860771,50.28501 120.770151,50.28501 c 70.909379,0 120.770152,-50.28501 120.770152,-50.28501
//           *******                 ********            ********                          *********            *********

// frown
// M 127.771,381.329 c 0,0 40.860771,-50.28501 120.770151,-50.28501 c 70.909379,0 120.770152,50.28501 120.770152,50.28501
//           *******                 *********            *********                          ********            ********
