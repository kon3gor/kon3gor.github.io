$( document ).ready( function() {

      var entries = [

          { label: 'Java', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
          { label: 'Kotlin', url: 'http://www.flashforum.de/', target: '_top' },
          { label: 'Android', url: 'http://www.jqueryscript.net/', target: '_top' },
          { label: 'Jetpack Navigation', url: 'http://forum.jswelt.de/', target: '_top' },
          { label: 'Custom views', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
          { label: 'Services', url: 'http://codepen.io/', target: '_top' },
          { label: 'Retrofit', url: 'http://threejs.org/', target: '_top' },
          { label: 'Glide', url: 'http://webglstudio.org/', target: '_top' },
          { label: 'Hilt', url: 'http://jscompress.com/', target: '_top' },
          { label: 'Dagger2', url: 'https://tinypng.com/', target: '_top' },
          { label: 'Moshi', url: 'http://caniuse.com/', target: '_top' },
          { label: 'Gson', url: 'https://goo.gl/', target: '_top' },
          { label: 'MVVM', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
          { label: 'SOLID', url: 'https://twitter.com/niklaswebdev', target: '_top' },
          { label: 'MVP', url: 'http://nkunited.deviantart.com/', target: '_top' },
          { label: 'DRY', url: 'http://gulpjs.com/', target: '_top' },
          { label: 'Yandex maps', url: 'https://www.browsersync.io/', target: '_top' },
          { label: 'Google maps', url: 'https://github.com/', target: '_top' },
          { label: 'Mapbox', url: 'https://www.shadertoy.com/', target: '_top' },
          { label: 'Geocoding', url: 'http://gamua.com/starling/', target: '_top' },
          { label: 'Yoo Kassa', url: 'http://jsperf.com/', target: '_top' },
          { label: 'CloudPayments', url: 'http://foundation.zurb.com/', target: '_top' },
          { label: 'Koin', url: 'http://createjs.com/', target: '_top' },
          { label: 'Work Manager', url: 'http://julian.com/research/velocity/', target: '_top' },
          { label: 'RxJava', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
          { label: 'Algorithms', url: 'https://jquery.com/', target: '_top' },
          { label: 'Some JS', url: 'http://www.jqueryrain.com/', target: '_top' },
          { label: 'Some html', url: 'http://jquery-plugins.net/', target: '_top' },

      ];

      var settings = {

          entries: entries,
          width: 1000,
          height: 800,
          radius: '65%',
          radiusMin: 75,
          bgDraw: false,
          opacityOver: 1.00,
          opacityOut: 0.05,
          opacitySpeed: 6,
          fov: 800,
          speed: 2,
          fontFamily: 'Rubik, sans-serif',
          fontSize: '1em',
          fontColor: '#fff',
          fontWeight: 'normal',//bold
          fontStyle: 'normal',//italic
          fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
          fontToUpperCase: true,

      };

      //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
      $( '#holder' ).svg3DTagCloud( settings );

} );
