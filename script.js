var videos = [
    {id:'Fv30ealYZLg', portrait:false, cap:'Performance'},
    {id:'8gTFIr8KwBA', portrait:false, cap:'Performance'},
    {id:'8ml5jVrg7vw', portrait:true,  cap:'Clip'},
    {id:'NopyBeeng3E', portrait:true,  cap:'Clip'},
    {id:'v5NbBcVwzB0', portrait:true,  cap:'Clip'}
  ];
  var stage = document.getElementById('stage');
  var player = document.getElementById('player');
  var thumbs = document.getElementById('thumbs');
  var ytlink = document.getElementById('ytlink');

  function select(i, autoplay){
    var v = videos[i];
    stage.classList.toggle('portrait', v.portrait);
    var ap = autoplay ? '&autoplay=1' : '';
    player.src = 'https://www.youtube.com/embed/' + v.id + '?rel=0&playsinline=1' + ap;
    ytlink.href = 'https://youtu.be/' + v.id;
    var all = thumbs.querySelectorAll('.thumb');
    for (var j=0; j<all.length; j++){ all[j].classList.toggle('active', j===i); }
  }

  videos.forEach(function(v, i){
    var b = document.createElement('div');
    b.className = 'thumb' + (i===0 ? ' active' : '');
    b.innerHTML =
      '<img src="https://img.youtube.com/vi/' + v.id + '/hqdefault.jpg" alt="' + v.cap + '">' +
      '<div class="play"></div>' +
      '<div class="cap">' + v.cap + '</div>';
    b.addEventListener('click', function(){ select(i, true); });
    thumbs.appendChild(b);
  });