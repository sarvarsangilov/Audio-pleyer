Amplitude.init({
    bindings: {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    debug: true,
    visualization: 'michaelbromley_visualization',
    songs: [
      {
        "name": "ФИКСЕТТА",
        "artist": "FixEye",
        "album": "YouTube",
        "url": "/audio/Фиксай_ФИКСЕТТА_Официальный_клип.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "JUMANJI",
        "artist": "HEDEGAARD_feat",
        "album": "YouTube",
        "url": "/audio/HEDEGAARD_feat._CANCUN -JUMANJI.mp3",
        "visualization": "michaelbromley_visualization",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
      },
      {
        "name": "Zvyozdi(Yulduzlar)",
        "artist": "Yellow fire",
        "album": "YouTube",
        "url": "/audio/audio.mp3",
        "visualization": "michaelbromley_visualization",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
      }
    ],
  
    waveforms: {
        sample_rate: 50
    },
  
    visualizations: [
      {
        object: MichaelBromleyVisualization,
        params: {
  
        }
      }
    ]
});
  

$(function() {
    var rangePercent = $('[type="range"].amplitude-volume-slider').val();
    rangePercent = $('[type="range"].amplitude-volume-slider').val();
      $('h4').html(rangePercent+'<span class="valume"></span>');
      $('[type="range"].amplitude-volume-slider, h4>span.valume').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
      // $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
      $('h4').css({'transform': 'translateX(-50%) '/*scale(' + (1+(rangePercent/100)) + ')'*/, 'left': rangePercent+'%'});
    $('[type="range"].amplitude-volume-slider').on('change input', function() {
      rangePercent = $('[type="range"].amplitude-volume-slider').val();
      $('h4').html(rangePercent+'<span class="valume"></span>');
      $('[type="range"].amplitude-volume-slider, h4>span.valume').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
      //$('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
      $('h4').css({'transform': 'translateX(-50%) '/*scale(' + (1+(rangePercent/100)) + ')'*/, 'left': rangePercent+'%'});
    });
  });

  // function name(params) {
  //   const url = 'https://61da8127ce86530017e3cd78.mockapi.io/app';
  //   fetch(url)
  //   .then((resp) => resp.json())
  //   .then(function(data) {
  //     let news = data;
  //     function newTemplate(news) {
  //       return `
        
  //       `;
  //     }
  //     document.getElementById("news").innerHTML = `
  //       <h1 class="app-title">Yangiliklar (${news.length} natija)</h1>
  //       <div style="display:flex;flex-direction: column;">
  //       ${news.map(newTemplate).join("")}</div>
  //       <p class="footer">Shu paytgacha ${news.length} yangiliklar yuklangan!</p>
  //     `;
  //   })
    
  // }

  // document.querySelector("#FileInput").onchange = async (e) => {
  // e.preventDefault();

  // // const jsmediatags = window.jsmediatags;

  // // document.querySelector("#input").addEventListener("change", (event) => {
    
  //   const file = e.target.files[0];

  //   jsmediatags.read(file, {
  //     onSuccess: function(tag) { 

  //       // Array buffer to base64
  //       const data = tag.tags.picture.data;
  //       const format = tag.tags.picture.format;
  //       let base64String = "";
  //       for (let i = 0; i < data.length; i++) {
  //         base64String += String.fromCharCode(data[i]);
  //       }

  //       // Output media tags
  //       console.log(tag.tags.title);
  //       // document.querySelector("#cover").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
        
  //       // document.querySelector("#title").textContent = tag.tags.title;
  //       // document.querySelector("#artist").textContent = tag.tags.artist;
  //       },
  //       onError: function(error) {
  //         console.log(error);
  //       }
  //   });  
  

  // // var form = document.querySelector("#formElem");
  
  //   data = {
  //     "name": tag.tags.title,
  //     "artist": tag.tags.artist,
  //     "album": tag.tags.album,
  //     "url": "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
  //     "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
  //     "visualization": "michaelbromley_visualization"
  //   }
  
  //   let response = await fetch('https://61da8127ce86530017e3cd78.mockapi.io/koment1', {
  //           method: 'POST', 
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(data),
  //   })
  
  
  //   //history.go(0);
  // };