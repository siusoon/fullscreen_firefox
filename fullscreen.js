javascript:(function(){var e=document.createElement("div"),t=document.documentElement;e.innerText="Go to fullscreen view";e.setAttribute("style","position: fixed; top: 10%; left: 10%; padding: 30%; background: #000; color: #fff; opacity: .7; cursor: pointer;");document.body.appendChild(e);e.onclick=function(){if(t.requestFullscreen){t.requestFullscreen()}else if(t.mozRequestFullScreen){t.mozRequestFullScreen()}else if(t.webkitRequestFullscreen){t.webkitRequestFullscreen()}document.body.removeChild(e)}})();
